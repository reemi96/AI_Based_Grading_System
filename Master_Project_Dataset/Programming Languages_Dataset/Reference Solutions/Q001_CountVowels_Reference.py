text = input()

count = 0

for x in text:
    if x.lower() in "aeiou":
        count += 1

print(count)