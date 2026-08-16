# Correct solution.
# Uses while loop.

students = {}

i = 0

while i < 5:
    name = input()
    grade = int(input())

    students[name] = grade

    i += 1

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")