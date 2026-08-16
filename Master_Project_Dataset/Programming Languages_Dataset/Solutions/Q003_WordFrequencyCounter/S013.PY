# Error: Frequency is increased by 2 instead of 1.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 2
    else:
        frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])