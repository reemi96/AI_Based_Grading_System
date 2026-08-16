# Error: Dictionary key and value are reversed.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[grade] = name

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")