# Error: Correctly counts frequencies but prints only the last word.

sentence = input()

words = sentence.split()

frequency = {}

for word in words:
    frequency[word] = frequency.get(word, 0) + 1

last_word = words[-1]

print(last_word, ":", frequency[last_word])