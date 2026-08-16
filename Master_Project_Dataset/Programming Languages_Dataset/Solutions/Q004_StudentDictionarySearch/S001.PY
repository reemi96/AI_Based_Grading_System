# Error: Reads only 4 students instead of 5.

students = {}

for i in range(4):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")