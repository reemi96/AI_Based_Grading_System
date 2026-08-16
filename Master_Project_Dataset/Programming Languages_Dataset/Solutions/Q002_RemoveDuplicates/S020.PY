# Error: Compares numbers as strings.
# The input is not converted to integers.

numbers = input().split()

result = []

for num in numbers:
    if num not in result:
        result.append(num)

print(result)