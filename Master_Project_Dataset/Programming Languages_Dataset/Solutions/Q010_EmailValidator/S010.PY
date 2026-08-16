# Error: Uses a fixed list instead of reading emails from the user.

emails = [
    "ali@gmail.com",
    "sara@yahoo.com",
    "omar@hotmail.com",
    "lina@outlook.com",
    "noor@test.org"
]

valid = 0
invalid = 0

for email in emails:
    if email.count("@") == 1 and "." in email[email.index("@") + 1:]:
        valid += 1
    else:
        invalid += 1

print("Valid Emails:", valid)
print("Invalid Emails:", invalid)