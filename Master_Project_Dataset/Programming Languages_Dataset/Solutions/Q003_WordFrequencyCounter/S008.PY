# Correct solution.
# Uses a function.

def count_words(sentence):
    words = sentence.split()

    frequency = {}

    for word in words:
        frequency[word] = frequency.get(word, 0) + 1

    return frequency

sentence = input()

result = count_words(sentence)

for word, count in result.items():
    print(word, ":", count)