# Error: Starts from index 1.
# First element is never processed.

numbers = list(map(int, input().split()))

result = []

for i in range(1, len(numbers)):
    if numbers[i] not in result:
        result.append(numbers[i])

print(result)