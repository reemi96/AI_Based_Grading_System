# Error: Uses 'or' instead of 'and'.
# Email becomes valid if it has either '@' or '.', not necessarily both.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

for email in emails:
    if "@" in email or "." in email:
        valid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)