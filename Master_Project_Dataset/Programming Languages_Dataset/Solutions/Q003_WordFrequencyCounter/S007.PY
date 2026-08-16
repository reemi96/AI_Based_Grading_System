# Error: Does not update frequency correctly.
# Frequency remains 1 for all words.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    if word not in frequency:
        frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])