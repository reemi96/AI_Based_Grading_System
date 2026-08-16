# Error: Searches in grades instead of student names.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if search_name in students.values():
    print(search_name)
else:
    print("Student Not Found")