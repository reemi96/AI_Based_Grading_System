# Correct solution.
# Uses a vowel list.

text = input()

vowels = ['a', 'e', 'i', 'o', 'u']

count = 0

for ch in text.lower():
    if ch in vowels:
        count += 1

print(count)