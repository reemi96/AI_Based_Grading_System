# Error: Adds every element.
# Duplicate removal logic is missing.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    result.append(num)

print(result)