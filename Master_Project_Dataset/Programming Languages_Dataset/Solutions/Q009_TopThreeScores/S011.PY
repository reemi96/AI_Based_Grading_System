# Error: Average is calculated using only the top three scores.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

average = (scores[0] + scores[1] + scores[2]) / 3

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)