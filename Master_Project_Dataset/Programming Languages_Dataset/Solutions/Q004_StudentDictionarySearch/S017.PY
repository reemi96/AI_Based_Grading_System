# Error: Stops reading students after the first iteration.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade
    break

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")