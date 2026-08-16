# Error: Uses addition instead of multiplication when calculating salary.

name = input()

hours = float(input())
rate = float(input())

regular_salary = hours + rate

print("Employee:", name)
print("Salary:", regular_salary)