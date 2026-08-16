# Error: Accepts emails containing more than one '@'.

emails = []

for i in range(5):
    emails.append(input("Enter email: "))

valid = 0
invalid = 0

for email in emails:

    if "@" in email:
        at = email.index("@")

        if "." in email[at + 1:]:
            valid += 1
        else:
            invalid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)