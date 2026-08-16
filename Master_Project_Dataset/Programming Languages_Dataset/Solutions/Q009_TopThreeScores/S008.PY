# Error: Uses min() instead of max() for the highest score.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

highest = min(scores)
second_highest = scores[1]
third_highest = scores[2]

average = sum(scores) / len(scores)

print("Highest Score:", highest)
print("Second Highest Score:", second_highest)
print("Third Highest Score:", third_highest)
print("Average Score:", average)