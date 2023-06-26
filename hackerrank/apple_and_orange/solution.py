def countApplesAndOranges(s, t, a, b, apples, oranges):
  # Write your code here
  applesInRange = 0
  orangesInRange = 0
    
  for i in range(len(apples)):
    if apples[i] + a >= s and apples[i] + a <= t:
      applesInRange += 1
          
  for i in range(len(oranges)):
    if oranges[i] + b >= s and oranges[i] + b <= t:
      orangesInRange += 1
          
  print(applesInRange)
  print(orangesInRange)

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])
# 1
# 2
