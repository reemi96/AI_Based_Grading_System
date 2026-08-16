# Error: Counts only uppercase vowels.

text = input()

count = 0

for ch in text:
    if ch in "AEIOU":
        count += 1

print(count)