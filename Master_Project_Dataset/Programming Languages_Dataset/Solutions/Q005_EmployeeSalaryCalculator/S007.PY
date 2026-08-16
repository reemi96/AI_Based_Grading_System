# Error: Calculates overtime hours incorrectly.
# Uses all worked hours as overtime hours.

name = input()

hours = float(input())
rate = float(input())

regular_salary = 40 * rate

overtime_salary = hours * rate * 1.5

total_salary = regular_salary + overtime_salary

print("Employee:", name)
print("Total Salary:", total_salary)