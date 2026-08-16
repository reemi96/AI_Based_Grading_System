# Error: Calculates average by dividing by 7 instead of 8.

scores = []

for i in range(8):
    scores.append(float(input("Enter score: ")))

scores.sort(reverse=True)

average = sum(scores) / 7

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)