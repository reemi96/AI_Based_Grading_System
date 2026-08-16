# Error: Uses max() for all three positions.
# Highest, second highest, and third highest are all the same value.
# Without Sorting
scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

highest = max(scores)
second_highest = max(scores)
third_highest = max(scores)

average = sum(scores) / len(scores)

print("Highest Score:", highest)
print("Second Highest Score:", second_highest)
print("Third Highest Score:", third_highest)
print("Average Score:", average)