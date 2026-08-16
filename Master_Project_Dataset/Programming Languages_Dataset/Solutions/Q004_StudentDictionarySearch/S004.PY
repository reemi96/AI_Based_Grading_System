# Error: Stores only the last student.

for i in range(5):
    name = input()
    grade = int(input())

search_name = input()

if search_name == name:
    print(grade)
else:
    print("Student Not Found")