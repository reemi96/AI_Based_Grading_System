# Correct solution.
# Uses while loop.

numbers = list(map(int, input().split()))

result = []

i = 0

while i < len(numbers):
    if numbers[i] not in result:
        result.append(numbers[i])

    i += 1

print(result)