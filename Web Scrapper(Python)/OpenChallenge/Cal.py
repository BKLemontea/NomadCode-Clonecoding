def cal():
    a = int(input("첫번째 인자 : "))
    oper_input = input("연산자 : ")
    b = int(input("두번째 인자 : "))

    if oper_input == '+':
        return a+b
    elif oper_input == '-':
        return a-b
    elif oper_input == '*':
        return a*b
    else:
        return a/b

print(f"답 : {cal()}")