# Error: Reads only 4 email addresses instead of 5.

emails = []

for i in range(4):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

for email in emails:
    if email.count("@") == 1:
        pos = email.index("@")

        if "." in email[pos + 1:]:
            valid += 1
        else:
            invalid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)