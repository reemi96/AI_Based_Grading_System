# Error: Checks duplicates against the original list instead of the result list.
# No duplicates are removed.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if num not in numbers:
        result.append(num)

print(result)