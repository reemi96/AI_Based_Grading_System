# Correct solution.
# Uses a new list and preserves order.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if num not in result:
        result.append(num)

print(result)