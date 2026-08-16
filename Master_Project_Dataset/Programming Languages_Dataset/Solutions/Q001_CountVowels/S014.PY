# Correct solution.
# Uses while loop.

text = input()

count = 0
i = 0

while i < len(text):
    if text[i].lower() in "aeiou":
        count += 1

    i += 1

print(count)