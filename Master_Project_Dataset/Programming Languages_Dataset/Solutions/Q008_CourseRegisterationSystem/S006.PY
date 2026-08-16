# Error: Displays the wrong total number of courses.

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

search = input("Enter course to register: ")

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses) - 1)