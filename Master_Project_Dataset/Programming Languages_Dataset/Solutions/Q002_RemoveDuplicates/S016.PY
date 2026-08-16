# Error: Appends duplicates instead of unique values.
# The condition is reversed.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if num in result:
        result.append(num)

print(result)