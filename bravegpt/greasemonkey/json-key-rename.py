import os

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Perform string replacements
    content = content.replace('mode_prefixMode', 'mode_prefix')
    content = content.replace('mode_suffixMode', 'mode_suffix')

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def process_directory(directory):
    for foldername, subfolders, filenames in os.walk(directory):
        for filename in filenames:
            if filename == 'messages.json':
                file_path = os.path.join(foldername, filename)
                process_file(file_path)

if __name__ == "__main__":
    current_directory = os.path.dirname(os.path.realpath(__file__))
    process_directory(current_directory)
