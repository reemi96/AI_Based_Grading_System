# Correct solution.

scores = []

for i in range(8):
    score = float(input(f"Enter score {i + 1}: "))
    scores.append(score)

scores.sort(reverse=True)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])

average = sum(scores) / len(scores)

print("Average Score:", average)