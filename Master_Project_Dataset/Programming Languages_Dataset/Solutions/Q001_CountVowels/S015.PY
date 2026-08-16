# Error: Uses == instead of in.
# The condition checks if one character equals the full string "aeiou",
# which is never true.

text = input()

count = 0

for ch in text.lower():
    if ch == "aeiou":
        count += 1

print(count)