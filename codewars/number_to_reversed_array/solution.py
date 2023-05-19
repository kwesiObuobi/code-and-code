def digitize(n):
  new_arr = []
  for i in str(n)[::-1]:
    new_arr.append(int(i))
      
  return new_arr

print(digitize(35213))
# [1,3,2,5,3]

print(digitize(23582357))
# [7,5,3,2,8,5,3,2]
                  