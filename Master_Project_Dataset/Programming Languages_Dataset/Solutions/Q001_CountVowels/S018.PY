# Error: Resets count to 0 inside the loop.
# The final count will only depend on the last character.

text = input()

count = 0

for X in text.lower():
    count = 0
    if X in "aeiou":
        count += 1

print(count)