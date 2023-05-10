def birthday(s, d, m):
  answer = 0
  
  if m == 1 and len(s) == 1:
    if (s[0] == d):
      return answer + 1
    return
  
  i = 0
  while i+m-1 < len(s):
    tempD = 0
    j = i
    while j <= i+m-1:
        tempD += s[j]
        j += 1
    
    if tempD == d:
        answer += 1
    
    i += 1
  
  return answer

print(birthday([2,2,1,3,2], 4, 2))
# 2

print(birthday([1,2,1,3,2], 3, 2))
# 2

print(birthday([4], 4, 1))
# 1

print(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1], 18, 7))
# 3
