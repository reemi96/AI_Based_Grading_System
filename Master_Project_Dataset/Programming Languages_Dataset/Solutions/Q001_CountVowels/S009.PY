# Error: Ignores the last character.

text = input()

count = 0

for i in range(len(text) - 1):
    if text[i].lower() in "aeiou":
        count += 1

print(count)