# Error: Displays the first three entered scores instead of the highest three.
# Without Sorting
scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)