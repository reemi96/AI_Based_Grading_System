# Error: Does not pay overtime rate.
# Overtime hours are paid at the normal rate.

name = input()

hours = float(input())
rate = float(input())

if hours <= 40:
    total_salary = hours * rate
else:
    total_salary = 40 * rate + (hours - 40) * rate

print("Employee:", name)
print("Total Salary:", total_salary)