# Correct solution.
# Uses while loop.

emails = []

i = 0

while i < 5:
    emails.append(input("Enter email: "))
    i += 1

valid = 0
invalid = 0

for email in emails:
    if email.count("@") == 1:
        position = email.index("@")

        if "." in email[position + 1:]:
            valid += 1
        else:
            invalid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)