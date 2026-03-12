'''
https://school.programmers.co.kr/learn/courses/30/lessons/120880
'''

def solution(numlist, n):
    answer = [[abs(i - n), i] for i in numlist]
    sorted_list = sorted(answer, key = lambda x:(x[0], -x[1]))
    return [x[1] for x in sorted_list]