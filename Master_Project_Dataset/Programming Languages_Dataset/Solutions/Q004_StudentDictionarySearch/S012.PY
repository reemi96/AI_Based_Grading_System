# Error: Overwrites the dictionary in every iteration.
# Only the last student remains.

students = {}

for i in range(5):
    students = {}

    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if search_name in students:
    print(students[search_name])
else:
    print("Student Not Found")