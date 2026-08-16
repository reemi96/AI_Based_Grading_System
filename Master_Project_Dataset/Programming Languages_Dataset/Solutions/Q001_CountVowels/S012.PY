# Correct solution.
# Uses sum().

text = input()

count = sum(1 for X in text.lower() if X in "aeiou")

print(count)