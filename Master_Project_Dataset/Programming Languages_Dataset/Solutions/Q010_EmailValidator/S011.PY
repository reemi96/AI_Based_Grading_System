# Error: Validates only the first email.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

email = emails[0]

if email.count("@") == 1 and "." in email[email.index("@") + 1:]:
    valid += 1
else:
    invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)