# Error: Prints working hours instead of salary & without overtime calculation

name = input()

hours = float(input())
rate = float(input())

salary = hours * rate

print("Employee:", name)
print("Total Salary:", hours)