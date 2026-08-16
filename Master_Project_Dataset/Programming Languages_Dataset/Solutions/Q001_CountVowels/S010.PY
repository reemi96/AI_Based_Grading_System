# Error: Counts only lowercase vowels.
# Uppercase vowels are ignored.

text = input()

count = 0

for ch in text:
    if ch in ['a', 'e', 'i', 'o', 'u']:
        count += 1

print(count)