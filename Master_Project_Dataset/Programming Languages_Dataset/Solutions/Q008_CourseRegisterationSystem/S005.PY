# Error: Searches only in the first course.

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

search = input("Enter course to register: ")

if search == courses[0]:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))