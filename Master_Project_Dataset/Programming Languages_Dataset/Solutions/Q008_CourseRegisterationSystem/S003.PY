# Correct solution.

courses = []

for i in range(5):
    course = input(f"Enter course {i + 1}: ")
    courses.append(course)

search_course = input("Enter course to register: ")

if search_course in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))