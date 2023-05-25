# Translate msg's from en/messages.json to output_langs

import os, json
from sys import stdout # for dynamic prints
from translate import Translator

provider = ''
output_langs = ['en', 'fr', 'in', 'vi', 'zh', 'zh-cn', 'zh-hk', 'zh-sg', 'zh-tw']

# UI initializations
os.system('color') ; print('\033[0;92m') # set font to bright green
terminal_width = os.get_terminal_size()[0]
def print_trunc(msg) : print(msg if len(msg) < terminal_width else msg[0:terminal_width-4] + '...')

print('')

# Determine _locales dir
print_trunc('Searching for _locales...')
locales_dir = None
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..'))
for root, dirs, files in os.walk(root_dir):
    if '_locales' in dirs : # _locales found
        locales_dir = os.path.join(root, '_locales') ; break

# Print result
if locales_dir : print_trunc(f'_locales directory found!\n\n>> { locales_dir }\n')
else : print_trunc('Unable to locate a _locales directory.') ; exit()

# Load en/messages.json
en_msgs_path = os.path.join(locales_dir, 'en', 'messages.json')
with open(en_msgs_path, 'r', encoding='utf-8') as en_file:
    en_messages = json.load(en_file)

# Create/update/translate [output_langs]/messages.json
langs_added, langs_skipped, langs_translated, langs_not_translated  = [], [], [], []
for lang_code in output_langs:
    lang_added, lang_skipped, lang_translated = False, False, False
    folder = lang_code.replace('-', '_') ; translated_msgs = {}
    if '-' in lang_code: # cap suffix
        sepIndex = folder.index('_')
        folder = folder[:sepIndex] + '_' + folder[sepIndex+1:].upper()

    # Skip English locales
    if lang_code.startswith('en'):
        print_trunc(f'Skipped {folder}/messages.json...')
        langs_skipped.append(lang_code) ; continue

    # Initialize target locale folder
    folder_path = os.path.join(locales_dir, folder)
    if not os.path.exists(folder_path): # if missing, create folder
        os.makedirs(folder_path) ; langs_added.append(lang_code) ; lang_added = True

    # Initialize target messages
    msgs_path = os.path.join(folder_path, 'messages.json')
    if os.path.exists(msgs_path):
        with open(msgs_path, 'r', encoding='utf-8') as messages_file:
            messages = json.load(messages_file)
    else : messages = {}    

    # Attempt translations
    stdout.write(f"{ 'Adding' if not messages else 'Updating' } { folder }/messages.json...\r")
    stdout.flush()
    en_keys = list(en_messages.keys())
    fail_flags = ['INVALID TARGET LANGUAGE', 'MYMEMORY']
    for key in en_keys:
        if key not in messages:
            original_msg = translated_msg = en_messages[key]['message']
            try:
                # if provider : translator = Translator(provider=provider, to_lang=lang_code)
                # else: translator = Translator(to_lang=lang_code)
                translator = Translator(to_lang=lang_code)
                translated_msg = translator.translate(original_msg)
                if any(flag in translated_msg for flag in fail_flags):
                    translated_msg = original_msg
            except Exception as e:
                print_trunc(f'Translation failed for key "{key}" in {lang_code}: {e}')
                translated_msg = original_msg
            translated_msgs[key] = { 'message': translated_msg }
        else : translated_msgs[key] = messages[key]

    # Format messages
    formatted_msgs_string = '{\n'
    for index, (key, message) in enumerate(translated_msgs.items()):
        msg_string = json.dumps(message, ensure_ascii=False)
        msg_string = msg_string.replace('{', '{ ')
        msg_string = msg_string.replace(':', ': ')
        msg_string = msg_string.replace('}', ' }')
        formatted_line = f'  "{key}": {msg_string}'
        formatted_msgs_string += formatted_line
        if index < len(translated_msgs) - 1 : formatted_msgs_string += ','
        formatted_msgs_string += '\n'
    formatted_msgs_string += '}'
    with open(msgs_path, 'w', encoding='utf-8') as output_file:
        output_file.write(formatted_msgs_string)

    if translated_msgs == messages : langs_skipped.append(lang_code) ; lang_skipped = True
    elif translated_msgs != messages : langs_translated.append(lang_code) ; lang_translated = True
    if not lang_translated : langs_not_translated.append(lang_code)
    stdout.write(' ' * terminal_width + '\r') # erase prev line
    stdout.write(f"{ 'Added' if lang_added else 'Skipped' if lang_skipped else 'Updated' } { folder }/messages.json\n")
    stdout.flush()

# Print summary
print_trunc('\n\nAll messages.json files updated successfully!\n')
if langs_translated:
    print_trunc(f'Languages translated: {len(langs_translated)}')
    print_trunc('[ ' + ', '.join(langs_translated) + ' ]')
if langs_skipped:
    print_trunc(f'Languages skipped: {len(langs_skipped)}')
    print_trunc('[ ' + ', '.join(langs_skipped) + ' ]')
if langs_added:
    print_trunc(f'Languages added: {len(langs_added)}')
    print_trunc('[ ' + ', '.join(langs_added) + ' ]')
if langs_not_translated:
    print_trunc(f'Languages not translated: {len(langs_not_translated)}')
    print_trunc('[ ' + ', '.join(langs_not_translated) + ' ]')
