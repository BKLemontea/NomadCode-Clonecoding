#Built-int-Functions
age = "18"
print(type(age))
print(age)

n_age = int(age)
print(type(n_age))
print(n_age)

#Function 1
print("----------------------")

def say_hello_f():
    print("hello") #body, 파이썬은 다른 언어와는 달리 {}로 구분하지 않고, tab과 space 등의 들여쓰기로 body를 구분한다.
print("bye") #위와 같은 이유로 print("bye")는 function이 아니다.

say_hello_f()
say_hello_f #()를 쓰지 않으면 작동하지 않는다.

#Function 2
print("----------------------")
def plus(a, b):
    print(a + b)

def minus(a, b = 0):
    print(a - b)

plus(2, 5)
minus(2)

def say_hello(name = "anonymous"):
    print("hello", name)

say_hello()
say_hello("LemonTea")

#Function 3
print("----------------------")

def p_plus(a, b):
    print(a + b)

def r_plus(a, b):
    return a+ b
    print("someting here", True) #뭔가를 return하는 순간 그 function은 종료된다. 고로 실행안됨

p_result = p_plus(2, 3)
r_result = r_plus(2, 3)

print(p_result, r_result) #None 5가 출력된다.

#Function 4
print("----------------------")

def test_minus(a, b):
    print(a - b)

test_minus(b=30, a=1)

def say_hello2(name, age): #keyword argument를 사용하는 이유는 인자가 많아지면 순서를 실수할 수 있기 때문이다.
    return f"Hello {name} you are {age} years old" #"Hello " + name + " you are " + age + " years old" 둘다 동일함.

hello  = say_hello2("LemonTea","12") #say_hello2(age="12", name="LemonTea")
print(hello)

#Function 5
print("----------------------")

def plus_t(a,b):
    if type(b) is int or type(b) is float: 
        return a+b
    else:
        return None
        

print(plus_t(12, 12.1))