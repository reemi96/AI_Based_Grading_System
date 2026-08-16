# Error: Counts characters instead of words.

sentence = input()

frequency = {}

for X in sentence:
    if X in frequency:
        frequency[X] += 1
    else:
        frequency[X] = 1

for item in frequency:
    print(item, ":", frequency[item])