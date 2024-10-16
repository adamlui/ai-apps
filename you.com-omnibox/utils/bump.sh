#!/bin/bash

# Init UI colors
nc="\033[0m"    # no color
br="\033[1;91m" # bright red
by="\033[1;33m" # bright yellow
bg="\033[1;92m" # bright green
bw="\033[1;97m" # bright white

# Init manifest paths
CHROMIUM_MANIFEST="chromium/extension/manifest.json"
FF_MANIFEST="firefox/extension/manifest.json"

# Normalize args
ARG=${1#-} ; ARG=${ARG#-} # strip leading dash(es)

# Determine manifests to edit
case "$ARG" in
    chrome|chromium) MANIFESTS_TO_EDIT=("$CHROMIUM_MANIFEST") ;;
    firefox|ff) MANIFESTS_TO_EDIT=("$FF_MANIFEST") ;;
    "") MANIFESTS_TO_EDIT=("$CHROMIUM_MANIFEST" "$FF_MANIFEST") ;;
    *) echo -e "${br}Invalid argument. Use 'chrome', 'chromium', 'firefox', 'ff', or leave empty.${nc}" ; exit 1 ;;
esac
MULTI_BUMP=$( # flag for echos/git commit msg
    [[ ${#MANIFESTS_TO_EDIT[@]} -gt 1 ]] && echo true || echo false)

# Bump versions
if $MULTI_BUMP
    then VERSION_LABEL="versions in manifests"
    else VERSION_LABEL="version in ${MANIFESTS_TO_EDIT[0]}"
fi
echo -e "${by}\nBumping ${VERSION_LABEL}...${nc}\n"
TODAY=$(date +'%Y.%-m.%-d') # YYYY.M.D format
NEW_VERSIONS=() # for dynamic commit msg
for MANIFEST in "${MANIFESTS_TO_EDIT[@]}" ; do

    # Determine old/new versions
    OLD_VER=$(sed -n 's/.*"version": *"\([0-9.]*\)".*/\1/p' "$MANIFEST")
    if [[ $OLD_VER == "$TODAY" ]]  # exact match for $TODAY
        then # bump to $TODAY.1
            NEW_VER="$TODAY.1"
    elif [[ $OLD_VER == "$TODAY."* ]] # partial match for $TODAY
        then # bump to $TODAY.n+1
            LAST_NUMBER=$(echo "$OLD_VER" | awk -F '.' '{print $NF}')
            NEW_VER="$TODAY.$((LAST_NUMBER + 1))"
    else # no match for $TODAY
        # bump to $TODAY
            NEW_VER="$TODAY"
    fi
    NEW_VERSIONS+=("$NEW_VER")

    # Bump old version
    sed -i "s/\"version\": \"$OLD_VER\"/\"version\": \"$NEW_VER\"/" "$MANIFEST"
    if [[ ${#MANIFESTS_TO_EDIT[@]} -gt 1 ]]; then
        echo -e "${MANIFEST}: ${bw}v${OLD_VER}${nc} → ${bg}v${NEW_VER}${nc}"
    else
        echo -e "${bw}v${OLD_VER}${nc} → ${bg}v${NEW_VER}${nc}"
    fi
done

# Define commit msg
COMMIT_MSG="Bumped \`version\`"
UNIQUE_VERSIONS=($(echo "${NEW_VERSIONS[@]}" | tr ' ' '\n' | sort -u | tr '\n' ' '))
if [[ ${#UNIQUE_VERSIONS[@]} -eq 1 ]] ; then
    COMMIT_MSG+=" to \`${UNIQUE_VERSIONS[0]}\`" ; fi

# Commit/push bump(s)
echo -e "${by}\nCommitting $( [[ $MULTI_BUMP == true ]] && echo bumps || echo bump) to Git...\n${nc}"
git add ./**/manifest.json
git commit -n -m "$COMMIT_MSG"
git push

# Print final summary
MANIFEST_LABEL=$( [[ $MULTI_BUMP == true ]] && echo "Manifests" || echo "${MANIFESTS_TO_EDIT[0]}")
echo -e "\n${bg}Success! ${MANIFEST_LABEL} updated/committed/pushed to GitHub${nc}"
