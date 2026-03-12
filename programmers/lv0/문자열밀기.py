'''
https://school.programmers.co.kr/learn/courses/30/lessons/120921
'''

def solution(A, B):
    answer = -1
    tmp = [i for i in A]
    if A == B:
        return 0
    for i in range(len(A)):
        last = tmp.pop()
        tmp.insert(0, last)
        result = "".join(tmp)
        if result == B:
            answer = i + 1
            break
    return answer