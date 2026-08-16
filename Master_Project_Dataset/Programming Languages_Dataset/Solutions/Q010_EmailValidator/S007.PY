# Error: Checks for '.' before '@' instead of after '@'.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

for email in emails:
    if email.count("@") == 1:
        at = email.index("@")

        if "." in email[:at]:
            valid += 1
        else:
            invalid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)