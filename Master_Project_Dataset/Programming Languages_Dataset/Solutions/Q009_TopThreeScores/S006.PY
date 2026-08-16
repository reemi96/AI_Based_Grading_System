# Error: Uses the lowest score instead of the third highest score.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[-1])
print("Average Score:", average)