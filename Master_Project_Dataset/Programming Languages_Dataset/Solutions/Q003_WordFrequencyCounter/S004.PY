# Error: Counts only the first word.

sentence = input()

words = sentence.split()

frequency = {}

if len(words) > 0:
    frequency[words[0]] = 1

for word in frequency:
    print(word, ":", frequency[word])