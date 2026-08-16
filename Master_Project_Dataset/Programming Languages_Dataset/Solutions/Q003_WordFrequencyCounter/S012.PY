# Error: Uses count() incorrectly.
# The student counts every word using the count of the first word only.

sentence = input()

words = sentence.split()

for word in words:
    print(word, ":", words.count(words[0]))