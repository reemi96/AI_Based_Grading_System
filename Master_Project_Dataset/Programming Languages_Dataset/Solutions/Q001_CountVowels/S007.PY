# Error: Starts loop from second character.
# First character is never checked.

text = input()

count = 0

for i in range(1, len(text)):
    if text[i].lower() in "aeiou":
        count += 1

print(count)