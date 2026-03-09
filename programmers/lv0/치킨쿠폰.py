'''
https://school.programmers.co.kr/learn/courses/30/lessons/120884
'''

def solution(chicken):
    answer = 0
    coupon = chicken
    while True:
        if coupon // 10 == 0:
            break
        tmp = coupon // 10
        answer += tmp
        coupon = tmp + (coupon % 10)
    return answer