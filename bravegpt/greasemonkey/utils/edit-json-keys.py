'''
Script:       edit-json-subkeys.py
Version:      2023.8.28
Description:  Edit key or sub-key values in json_folder/**.json
Author:       Adam Lui
URL:          https://github.com/adamlui/python-utils
'''

import os
import re

json_folder = '_locales'

# UI initializations
os.system('color')
print('\033[0;92m')  # set font to bright green
terminal_width = os.get_terminal_size()[0]


def print_trunc(msg): print(msg if len(msg) < terminal_width else msg[0:terminal_width - 4] + '...')


print('')

# Prompt user for keys/sub-keys to edit
keys_to_edit = {}
print("Enter key or sub-key to edit (e.g., 'appName.message' or 'appName')")
print("Press ENTER when done.\n")
while True:
    key_input = input("Enter key or sub-key (or ENTER if done): ")
    if not key_input:
        break
    new_value = input(f"Enter new value for '{key_input}': ")
    keys_to_edit[key_input] = new_value

# Determine closest JSON dir
print_trunc(f'Searching for { json_folder }...')
script_dir = os.path.abspath(os.path.dirname(__file__))
for root, dirs, files in os.walk(script_dir):  # search script dir recursively
    if json_folder in dirs:
        json_dir = os.path.join(root, json_folder)
        break
else:  # search script parent dirs recursively
    parent_dir = os.path.dirname(script_dir)
    while parent_dir and parent_dir != script_dir:
        for root, dirs, files in os.walk(parent_dir):
            if json_folder in dirs:
                json_dir = os.path.join(root, json_folder)
                break
        if json_dir:
            break
        parent_dir = os.path.dirname(parent_dir)
    else:
        json_dir = None

# Print result
if json_dir:
    print_trunc(f'JSON directory found!\n\n>> { json_dir }\n')
else:
    print_trunc(f'Unable to locate a { json_folder } directory.')
    exit()

# Process JSON files and edit specified keys/sub-keys' values
keys_edited, processed_count = [], 0
for root, _, files in os.walk(json_dir):
    for filename in files:
        if filename.endswith('.json'):

            # Open found JSON file
            file_path = os.path.join(root, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                data = f.read()

            # Edit keys/sub-keys values
            modified = False
            for key_input, new_value in keys_to_edit.items():
                keys = key_input.split('.')
                pattern = rf'"{re.escape(keys[0])}"\s*:\s*({{ "message": ")(.*?)(" }})'
                data, count = re.subn(pattern, f'"{keys[0]}": \\1{new_value}\\3', data)
                if count > 0:
                    keys_edited.append((key_input, os.path.relpath(file_path, json_dir)))
                    modified = True

            if modified:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(data)
                processed_count += 1

# Print file summaries
if keys_edited:
    print_trunc('\nKeys/sub-keys edited successfully!\n')
    for key_input, file_path in keys_edited:
        print(f'Edited value of key/sub-key "{key_input}" in {file_path}')

# Print final summary
print_trunc('\nKey/sub-key value editing process completed!\n')
print(f'Processed JSON Files: {processed_count}')
print(f'Keys/sub-keys Edited: {len(keys_edited)}')
