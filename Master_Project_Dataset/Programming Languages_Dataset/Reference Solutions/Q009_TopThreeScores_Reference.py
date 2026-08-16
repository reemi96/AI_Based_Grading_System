scores = []

for i in range(8):
    score = float(input(f"Enter score {i + 1}: "))
    scores.append(score)

scores.sort(reverse=True)

highest = scores[0]
second_highest = scores[1]
third_highest = scores[2]

average = sum(scores) / len(scores)

print("Highest Score:", highest)
print("Second Highest Score:", second_highest)
print("Third Highest Score:", third_highest)
print("Average Score:", average)