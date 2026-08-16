# Error: Stops after finding the first vowel.

text = input()

count = 0

for ch in text.lower():
    if ch in "aeiou":
        count += 1
        break

print(count)