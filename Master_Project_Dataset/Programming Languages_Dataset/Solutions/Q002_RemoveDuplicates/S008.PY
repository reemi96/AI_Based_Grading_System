# Error: Sorts the result list.
# Duplicates are removed, but the original order is not preserved.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if num not in result:
        result.append(num)

result.sort()

print(result)