def jumpingOnClouds(c, k):
  e = 100
  i = 0
  while True:
    index = (i + k) % len(c)
    i = index
    e -= 1
    
    if c[index] == 1:
      e -= 2
        
    if index == 0:
      break
      
  return e

print(jumpingOnClouds([0,0,1,0,0,1,1,0], 2))
# 92

print(jumpingOnClouds([0,0,1,0], 2))
# 96
