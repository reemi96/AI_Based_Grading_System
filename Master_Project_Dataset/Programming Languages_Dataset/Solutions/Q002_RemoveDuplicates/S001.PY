# Error: Removes all repeated values completely.
# Keeps only numbers that appear exactly once.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if numbers.count(num) == 1:
        result.append(num)

print(result)