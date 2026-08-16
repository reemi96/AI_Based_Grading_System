# Error: Uses rate * rate instead of hours * rate.

name = input()

hours = float(input())
rate = float(input())

salary = rate * rate

print("Employee:", name)
print("Salary:", salary)