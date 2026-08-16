# Error: Sorts scores in ascending order instead of descending.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort()

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)