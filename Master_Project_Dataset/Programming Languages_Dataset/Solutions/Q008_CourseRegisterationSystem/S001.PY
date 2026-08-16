# Error: Reads only 4 courses instead of 5.

courses = []

for i in range(4):
    courses.append(input("Enter course: "))

search = input("Enter course to register: ")

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))