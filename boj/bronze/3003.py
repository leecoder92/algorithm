answer_pieces = [1, 1, 2, 2, 2, 8]

pieces = list(map(int, input().split()))


for i in range(6):
    print(answer_pieces[i] - pieces[i], end=" ")
