def add_binary(a,b):
  sum = a + b
  result = ''
  while True:
    result += str(sum % 2)
    sum = sum // 2
    if sum < 2:
      if sum == 0:
        break
            
      result += str(sum)
      break

  return result[::-1]

print(add_binary(1,1))
# '10'

print(add_binary(0,1))
# '1'

print(add_binary(51,12))
# '111111'
