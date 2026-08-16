# Correct solution.
# Uses while loop.

scores = []

i = 0

while i < 8:
    scores.append(float(input("Enter score: ")))
    i += 1

scores.sort(reverse=True)

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)