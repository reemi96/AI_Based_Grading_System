# Error: Stores names only and ignores grades.

students = []

for i in range(5):
    name = input()
    grade = int(input())

    students.append(name)

search_name = input()

if search_name in students:
    print("Found")
else:
    print("Student Not Found")