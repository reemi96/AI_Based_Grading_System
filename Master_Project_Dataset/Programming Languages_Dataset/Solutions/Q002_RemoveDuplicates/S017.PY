# Error: Prints the original list instead of the list without duplicates.

numbers = list(map(int, input().split()))

result = []

for num in numbers:
    if num not in result:
        result.append(num)

print(numbers)