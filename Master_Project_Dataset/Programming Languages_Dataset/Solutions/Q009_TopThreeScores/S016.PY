# Correct solution.
# Uses max values after sorting.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

highest = scores[0]
second = scores[1]
third = scores[2]

average = sum(scores) / len(scores)

print("Highest Score:", highest)
print("Second Highest Score:", second)
print("Third Highest Score:", third)
print("Average Score:", average)