# Error: Clears the result list inside the loop.
# Only the last unique processed value may remain.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    result = []

    if num not in result:
        result.append(num)

print(result)