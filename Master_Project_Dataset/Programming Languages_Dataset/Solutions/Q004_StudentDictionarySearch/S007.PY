# Correct solution.
# Uses a function.

def find_student(students, name):
    if name in students:
        return students[name]

    return "Student Not Found"

students = {}

for i in range(5):
    student_name = input()
    student_grade = int(input())

    students[student_name] = student_grade

search_name = input()

print(find_student(students, search_name))