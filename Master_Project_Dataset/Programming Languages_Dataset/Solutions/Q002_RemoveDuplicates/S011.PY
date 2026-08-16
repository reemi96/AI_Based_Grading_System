# Error: Uses a fixed list instead of reading input from the user.

numbers = [1, 2, 2, 3, 4, 4, 5]

result = []

for num in numbers:
    if num not in result:
        result.append(num)

print(result)