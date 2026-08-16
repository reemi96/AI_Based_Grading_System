# Error: Pays all hours at overtime rate when hours exceed 40.

name = input()

hours = float(input())
rate = float(input())

if hours > 40:
    salary = hours * rate * 1.5
else:
    salary = hours * rate

print("Employee:", name)
print("Total Salary:", salary)