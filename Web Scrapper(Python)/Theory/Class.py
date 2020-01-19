#Blueprint와 유사
class Car():
    wheels = 4
    doors =4
    window = 4
    seats = 4
    
    #이것은 Method
    #Method는 Class안에 있는 Fucntion을 말한다.
    #Python은 모든 함수를 하나의 argument랑 함께 사용한다.
    #Method의 첫번째 argument는 Method를 호출하는 Instance 자신이다.
    def start(self):
        print(self.color)
        print("I started")
    
#이것은 Function
'''
def start():
    print("I started")
    '''
    
porche = Car()
porche.color = "Red Sexy Red"
porche.start()