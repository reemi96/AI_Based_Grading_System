# Error: Uses a fixed list instead of reading courses from the user.

courses = ["Math", "Physics", "Programming", "Database", "Networks"]

search = input("Enter course to register: ")

if search in courses:
    print("Registration Successful")
else:
    print("Course Not Found")

print("Total Courses:", len(courses))