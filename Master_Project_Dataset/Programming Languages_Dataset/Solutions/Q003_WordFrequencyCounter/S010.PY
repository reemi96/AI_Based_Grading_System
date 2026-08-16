# Error: Counts words correctly but prints only frequencies.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    frequency[word] = frequency.get(word, 0) + 1

for word in frequency:
    print(frequency[word])