# Correct solution.
# Uses while-free straightforward implementation.

name = input()

hours = float(input())
rate = float(input())

regular_salary = min(hours, 40) * rate

overtime_salary = max(hours - 40, 0) * rate * 1.5

total_salary = regular_salary + overtime_salary

print("Employee:", name)
print("Regular Salary:", regular_salary)
print("Overtime Salary:", overtime_salary)
print("Total Salary:", total_salary)