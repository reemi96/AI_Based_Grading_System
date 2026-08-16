# Error: Prints all grades instead of the searched student's grade.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

for grade in students.values():
    print(grade)