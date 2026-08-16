# Error: Prints only highest, lowest, and average.
# Passed and failed counts are missing.

grades = []

for i in range(5):
    grades.append(float(input("Enter grade: ")))

print("Highest Grade:", max(grades))
print("Lowest Grade:", min(grades))
print("Average Grade:", sum(grades) / len(grades))