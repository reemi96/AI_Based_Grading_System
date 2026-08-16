# Error: Uses partial matching.
# "Ali" will match "Ali Hassan" even though exact match is required.

students = {}

for i in range(5):
    name = input()
    grade = int(input())

    students[name] = grade

search_name = input()

found = False

for name in students:
    if search_name in name:
        print(students[name])
        found = True
        break

if not found:
    print("Student Not Found")