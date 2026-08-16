# Error: Counts all emails as valid.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = len(emails)
invalid = 0

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)