# Error: Always prints Registration Successful.
# & WITHOUT Searching and registeration result
courses = []

for i in range(5):
    courses.append(input("Enter course: "))

input("Enter course to register: ")

print("Registration Successful")
print("Total Courses:", len(courses))