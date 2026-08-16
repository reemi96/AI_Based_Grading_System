# Error: Skips the last word.

sentence = input()

words = sentence.split()

frequency = {}

for i in range(len(words) - 1):
    word = words[i]

    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

for word in frequency:
    print(word, ":", frequency[word])