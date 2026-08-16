# Error: Prints the first student's grade regardless of the search result.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

print(list(students.values())[0])