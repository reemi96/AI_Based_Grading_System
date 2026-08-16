# Correct solution.
# Uses variables for overtime hours.

name = input()

hours = float(input())
rate = float(input())

overtime_hours = max(0, hours - 40)

regular_hours = min(hours, 40)

regular_salary = regular_hours * rate

overtime_salary = overtime_hours * rate * 1.5

print("Employee:", name)
print("Regular Salary:", regular_salary)
print("Overtime Salary:", overtime_salary)
print("Total Salary:", regular_salary + overtime_salary)