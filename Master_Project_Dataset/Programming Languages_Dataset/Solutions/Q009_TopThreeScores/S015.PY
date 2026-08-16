# Error: Highest and second highest are swapped.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

average = sum(scores) / len(scores)

print("Highest Score:", scores[1])
print("Second Highest Score:", scores[0])
print("Third Highest Score:", scores[2])
print("Average Score:", average)