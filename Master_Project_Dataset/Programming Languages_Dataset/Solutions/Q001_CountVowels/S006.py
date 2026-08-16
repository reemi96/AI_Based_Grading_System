# Correct solution.
# Counts vowels using lower() and a for loop.

text = input()

count = 0

for ch in text:
    if ch.lower() in "aeiou":
        count += 1

print(count)