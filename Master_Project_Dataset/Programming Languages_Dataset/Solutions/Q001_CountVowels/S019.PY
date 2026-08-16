# Error: Checks only the first character.
# The rest of the string is ignored.

text = input()

count = 0

if text[0].lower() in "aeiou":
    count += 1

print(count)