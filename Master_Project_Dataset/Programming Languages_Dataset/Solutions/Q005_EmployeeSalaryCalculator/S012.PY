# Error: Calculates regular salary using all worked hours.

name = input()

hours = float(input())
rate = float(input())

regular_salary = hours * rate

overtime_salary = max(hours - 40, 0) * rate * 1.5

total_salary = regular_salary + overtime_salary

print("Employee:", name)
print("Total Salary:", total_salary)