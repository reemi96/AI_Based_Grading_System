# Correct solution.
# Uses a dictionary to count word frequencies.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])