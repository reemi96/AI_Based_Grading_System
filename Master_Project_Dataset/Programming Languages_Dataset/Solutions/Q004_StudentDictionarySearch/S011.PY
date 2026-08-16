# Error: Uses the student's grade as the search key.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

if students[search_name] > 0:
    print(students[search_name])
else:
    print("Student Not Found")