# Error: Reads hourly rate and hours in the wrong order.

name = input()

rate = float(input())
hours = float(input())

salary = hours * rate

print("Employee:", name)
print("Salary:", salary)