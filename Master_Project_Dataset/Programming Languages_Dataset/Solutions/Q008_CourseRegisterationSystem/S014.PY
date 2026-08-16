# Error: Appends the search course to the list before checking.
# Therefore registration is always successful.

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

search = input("Enter course to register: ")

courses.append(search)

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))