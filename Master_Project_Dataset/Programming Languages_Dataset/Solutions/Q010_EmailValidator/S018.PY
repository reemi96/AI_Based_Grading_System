# Error: Does not store emails in a list.
# Only the last entered email is checked.

for i in range(5):
    email = input("Enter email: ")

valid = 0
invalid = 0

if email.count("@") == 1 and "." in email[email.index("@") + 1:]:
    valid = 1
else:
    invalid = 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)