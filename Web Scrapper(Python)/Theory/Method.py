class Car():
    def __init__(self, *args, **kwargs):
        self.wheels = 4
        self.doors =4
        self.window = 4
        self.seats = 4
        self.color = kwargs.get("color", "black")
        self.price = kwargs.get("price", "$20")
    
    #Override
    def __str__(self):
        return f"Car with {self.wheels} wheels"

# 상속(Inheritance), 확장(Extend)
class Convertible(Car): # Car Class를 확장함
    def __init__(self, **kwargs): # Car Class의 __init__ Method를 확장함
        super().__init__(**kwargs) # 부모 클래스를 호출하는 함수
        self.time = kwargs.get("time, 10")
    
    def take_off(self):
        return "taking off"    
    
    def __str__(self):
        return f"Car with no roof"
    
class Something(Convertible): # 러시아의 마트료시카와 같은 구조
    pass

'''
print(Car) #여기서 Car는 아무것도 아닌 그냥 Class 이다.
print("---------------------")
print(dir(Car)) #dir는 Class안에 있는 모든 것들을 리스트로 보여준다.
'''

porche = Convertible(color = "green", price = "$40")
# print(porche) #이 시점에서 __str__ 이 호출된다.
porche.take_off()
print(porche)
'''
print(porche.color, porche.price)

mini = Car() #이 시점에서 __init__ 이 호출된다.
print(mini.color, mini.price)
'''