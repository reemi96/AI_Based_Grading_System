# Error: Does not store courses in a list.
# Only the last entered course is kept.

for i in range(5):
    course = input("Enter course: ")

search = input("Enter course to register: ")

if search == course:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", 1)