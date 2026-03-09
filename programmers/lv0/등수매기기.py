'''
https://school.programmers.co.kr/learn/courses/30/lessons/120882
'''

def solution(score):
    answer = []
    for eng, mth in score:
        answer.append((eng + mth) / 2)
    sorted_list = sorted(answer, reverse = True)
    ranks = [sorted_list.index(i) + 1 for i in answer]
    return ranks