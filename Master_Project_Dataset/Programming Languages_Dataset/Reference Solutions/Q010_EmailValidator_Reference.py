emails = []

for i in range(5):
    email = input(f"Enter email {i + 1}: ")
    emails.append(email)

valid = 0
invalid = 0

for email in emails:
    if email.count("@") == 1:
        at_index = email.index("@")

        if "." in email[at_index + 1:]:
            valid += 1
        else:
            invalid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)