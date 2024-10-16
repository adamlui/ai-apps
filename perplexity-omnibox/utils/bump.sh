#!/bin/bash

# Init UI colors
nc="\033[0m"    # no color
br="\033[1;91m" # bright red
by="\033[1;33m" # bright yellow
bg="\033[1;92m" # bright green
bw="\033[1;97m" # bright white

# Init manifest path
MANIFEST="chromium/extension/manifest.json"

# Bump version
echo -e "${by}\nBumping version in ${MANIFEST}...${nc}\n"
TODAY=$(date +'%Y.%-m.%-d') # YYYY.M.D format
NEW_VERSIONS=() # for dynamic commit msg
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
sed -i "s/\"version\": \"$OLD_VER\"/\"version\": \"$NEW_VER\"/" "$MANIFEST"
echo -e "${bw}v${OLD_VER}${nc} → ${bg}v${NEW_VER}${nc}"

# Commit bumps
echo -e "${by}\nCommitting $( [[ $MULTI_BUMP == true ]] && echo bumps || echo bump) to Git...\n${nc}"
git add ./**/manifest.json
git commit -n -m "Bumped \`version\` to $NEW_VER"
git push

# Print final summary
echo -e "\n${bg}Success! ${MANIFEST} updated/committed/pushed to GitHub${nc}"
