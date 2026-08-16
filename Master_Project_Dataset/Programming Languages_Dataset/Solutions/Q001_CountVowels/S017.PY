# Error: Counts vowels correctly but does not print the result.
# The output is missing.

text = input()

count = 0

for X in text.lower():
    if X in "aeiou":
        count += 1