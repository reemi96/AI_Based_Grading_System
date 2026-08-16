# Error: Always prints Course Not Found even if the course exists.

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

input("Enter course to register: ")

print("Course Not Found")
print("Total Courses:", len(courses))