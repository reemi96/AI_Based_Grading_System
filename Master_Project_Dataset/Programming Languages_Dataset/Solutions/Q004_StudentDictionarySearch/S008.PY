# Error: The student forgets to convert the grade to int.
# Grades are stored as strings.

students = {}

for i in range(5):
    name = input()
    grade = input()

    students[name] = grade

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")