#import math  #이 방식은 추천하지 않음
#print(math.ceil(1.2))
#print(math.fabs(-1.2))

#from math import ceil, fsum #math의 특정 기능만 가져올 수 있다.
#print(ceil(1.2))
#print(fsum([1,2,3,4,5,6,7]))

#from math import fsum as sexy_sum #이름을 원하는대로 바꿔서 사용할 수 도 있다.
#print(sexy_sum([1,2,3,4,5,6,7]))

from calculator import plus, minus #확장자명 없이 파일명만으로 가능하다.
print(plus(1,2), minus(1,2), True, "lalalalal", True, "lalalalalala") #print는 무한으로 매개변수를 가질 수 있다.