# 무제한 인자1
print("---------------------------------")
def plus(a, b, *args):
    print(args)
    return a+b

plus(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1)

# 무제한 인자2
print("---------------------------------")
def plus_1(a, b, *args, **kwargs):
    print(args)
    print(kwargs)
    return a+b

plus_1(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,hello=True,ajh=True,asf=True,asd=True)

# 무제한 인자3
print("---------------------------------")
def plus_2(*args):
    result = 0
    for number in args:
        result += number
    print(result)

plus_2(1,2,67,4,1,3,5,45,74,2,3,1,24,1)