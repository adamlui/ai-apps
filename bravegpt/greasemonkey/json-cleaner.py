import os

def process_messages_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()

        # Edit line 43: remove the rightmost character
        if len(lines) >= 43:
            lines[42] = lines[42][:-2] + '\n'  # Assuming '\n' needs to be preserved

        # Replace line 44 with '}'
        lines[43] = '}'

        with open(file_path, 'w', encoding='utf-8') as file:
            # Write the modified content back to the file
            file.writelines(lines)
            print(f"Processed: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def process_messages_files(directory):
    for foldername, subfolders, filenames in os.walk(directory):
        for filename in filenames:
            if filename == 'messages.json':
                file_path = os.path.join(foldername, filename)
                process_messages_file(file_path)

# Get the directory of the script
script_directory = os.path.dirname(os.path.abspath(__file__))

# Call the function to process messages.json files recursively from the script's location
process_messages_files(script_directory)
