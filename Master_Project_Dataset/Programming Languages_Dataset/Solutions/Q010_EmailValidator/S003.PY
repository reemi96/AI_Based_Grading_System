# Error: Checks only for '.' and ignores '@'.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

for email in emails:

    if "." in email:
        valid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)