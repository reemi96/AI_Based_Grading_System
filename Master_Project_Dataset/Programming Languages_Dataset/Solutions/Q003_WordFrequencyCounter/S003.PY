# Error: Every word is assigned frequency 1.
# Repeated words are not counted.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])