# Error: Uses a dictionary instead of a list.
# The solution does not follow the required data structure.

courses = {}

for i in range(5):
    course = input("Enter course: ")
    courses[course] = True

search = input("Enter course to register: ")

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))