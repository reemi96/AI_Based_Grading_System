# Error: Counts consonants instead of vowels.

text = input()

count = 0

for ch in text.lower():
    if ch not in "aeiou":
        count += 1

print(count)