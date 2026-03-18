toy = [list(map(str, input())) for _ in range(5)]

max_length = 0

for i in range(5):
    if len(toy[i]) >= max_length:
        max_length = len(toy[i])

for i in range(5):
    if len(toy[i]) < max_length:
        for _ in range(max_length - len(toy[i])):
            toy[i].append("none")

for j in range(max_length):
    for i in range(5):
        if (toy[i][j] == "none"):
            continue
        print(toy[i][j], end="")