# Error: Does not sort the list before selecting the top three scores.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)