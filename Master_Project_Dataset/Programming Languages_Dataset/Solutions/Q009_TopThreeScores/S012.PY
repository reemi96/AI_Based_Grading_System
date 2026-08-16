# Error: Uses a fixed list instead of reading user input.

scores = [70, 95, 80, 60, 90, 75, 88, 92]

scores.sort(reverse=True)

average = sum(scores) / len(scores)

print("Highest Score:", scores[0])
print("Second Highest Score:", scores[1])
print("Third Highest Score:", scores[2])
print("Average Score:", average)