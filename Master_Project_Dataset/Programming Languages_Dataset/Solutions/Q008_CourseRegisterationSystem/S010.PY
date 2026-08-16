# Error: Uses partial matching instead of exact matching.
# Searching for "Math" may match "Mathematics".

courses = []

for i in range(5):
    courses.append(input("Enter course: "))

search = input("Enter course to register: ")

found = False

for course in courses:
    if search in course:
        found = True

if found:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))