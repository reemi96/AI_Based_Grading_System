# Error: Skips the first word.

sentence = input()

words = sentence.split()

frequency = {}

for i in range(1, len(words)):
    word = words[i]

    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])