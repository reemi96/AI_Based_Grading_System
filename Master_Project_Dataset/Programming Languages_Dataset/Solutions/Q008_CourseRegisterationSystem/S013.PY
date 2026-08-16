# Error: Reads the course to register before reading the available courses.
# Input order does not match the problem requirements.

search = input("Enter course to register: ")

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))