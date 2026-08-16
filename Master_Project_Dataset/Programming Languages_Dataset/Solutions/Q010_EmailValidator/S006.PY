# Error: Counts all emails as invalid.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = len(emails)

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)