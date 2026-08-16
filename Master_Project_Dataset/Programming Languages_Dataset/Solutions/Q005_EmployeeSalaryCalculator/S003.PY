# Error: Ignores overtime completely.
# All hours are paid at the normal rate.

name = input()

hours = float(input())
rate = float(input())

salary = hours * rate

print("Employee:", name)
print("Total Salary:", salary)