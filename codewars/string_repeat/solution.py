def repeat_str(repeat, string):
  repeatedString = ''
  
  for i in range(repeat):
    repeatedString += string
      
  return repeatedString

print(repeat_str(4, 'Hello'))
# HelloHelloHelloHello