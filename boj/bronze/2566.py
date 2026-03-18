board = [list(map(int, input().split())) for _ in range(9)]

max_num = 0
x = 0
y = 0

for i in range(9):
    for j in range(9):
        if board[i][j] >= max_num:
            max_num = board[i][j]
            x = i
            y = j

print(max_num)
print(x + 1, y + 1)