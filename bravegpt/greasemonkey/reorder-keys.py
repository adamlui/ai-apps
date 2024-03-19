import os
import codecs

search_dir = os.path.dirname(os.path.abspath(__file__))

def find_messages_files(search_dir):
  messages_files = []
  for root, dirs, files in os.walk(search_dir):
    for file in files:
      if file == 'messages.json':
        messages_files.append(os.path.join(root, file))
  return messages_files

def process_messages_file(filepath):
  with codecs.open(filepath, 'r', 'utf-8') as f:
    contents = f.readlines()

  # Move line 10 after line 39
  line10 = contents.pop(8)
  contents.insert(4, line10)

  with codecs.open(filepath, 'w', 'utf-8') as f:
    f.writelines(contents)

messages_files = find_messages_files(search_dir)

for filepath in messages_files:
  process_messages_file(filepath)