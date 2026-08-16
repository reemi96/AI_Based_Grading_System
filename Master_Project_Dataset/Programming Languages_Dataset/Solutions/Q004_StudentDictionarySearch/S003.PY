# Correct solution.
# Uses a dictionary and searches by student name.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")