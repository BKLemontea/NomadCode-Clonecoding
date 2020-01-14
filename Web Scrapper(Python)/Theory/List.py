#mutable
days = ["Mon","Tue","Wed","Thu","Fri"]

#tuple
days_t = ("Mon","Tue","Wed","Thu","Fri") # 이 list는 변경할 수 없음

print(type(days))
print(days)
print(type(days_t))
print(days_t)

print("Mon" in days) #list의 item 중에 Mon이 있다면 True 없으면 False
print(days[2])
print(len(days))

days.append("Sat") #list는 mutable sequence이기 때문에 수정 가능
days.reverse()
print(days)