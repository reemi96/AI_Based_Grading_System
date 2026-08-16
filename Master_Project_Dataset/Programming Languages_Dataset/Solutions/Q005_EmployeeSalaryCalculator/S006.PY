# Error: Uses overtime multiplier 2 instead of 1.5.

name = input()

hours = float(input())
rate = float(input())

if hours <= 40:
    total_salary = hours * rate
else:
    total_salary = 40 * rate + (hours - 40) * rate * 2

print("Employee:", name)
print("Total Salary:", total_salary)