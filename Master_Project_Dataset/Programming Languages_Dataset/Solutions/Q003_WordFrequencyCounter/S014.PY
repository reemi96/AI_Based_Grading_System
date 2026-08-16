# Correct solution.
# Uses while loop.

sentence = input()

words = sentence.split()

frequency = {}

i = 0

while i < len(words):
    word = words[i]

    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

    i += 1

for word in frequency:
    print(word, ":", frequency[word])