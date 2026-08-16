# Correct solution.
# Uses a function.

def calculate_salary(hours, rate):
    if hours <= 40:
        regular = hours * rate
        overtime = 0
    else:
        regular = 40 * rate
        overtime = (hours - 40) * rate * 1.5

    return regular, overtime

name = input()

hours = float(input())
rate = float(input())

regular, overtime = calculate_salary(hours, rate)

print("Employee:", name)
print("Regular Salary:", regular)
print("Overtime Salary:", overtime)
print("Total Salary:", regular + overtime)