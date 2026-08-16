# Error: Forgot vowel 'u' in the vowel list.

text = input()

count = 0

for X in text.lower():
    if X in "aeio":
        count += 1

print(count)