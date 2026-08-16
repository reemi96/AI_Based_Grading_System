# Error: Prints True/False instead of the number of vowels.

text = input()

found = False

for ch in text.lower():
    if ch in "aeiou":
        found = True

print(found)