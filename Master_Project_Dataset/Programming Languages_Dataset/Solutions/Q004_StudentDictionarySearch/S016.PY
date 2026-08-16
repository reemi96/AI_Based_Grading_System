# Error: Prints all matching names instead of the grade.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if search_name in students:
    print(search_name)
else:
    print("Student Not Found")