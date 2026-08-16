# Correct solution.
# Uses while loop.

courses = []

i = 0

while i < 5:
    courses.append(input("Enter course: "))
    i += 1

course = input("Enter course to register: ")

if course in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))