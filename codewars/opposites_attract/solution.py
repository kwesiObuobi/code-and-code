def lovefunc( flower1, flower2 ):
  return (flower1 + flower2) % 2 != 0

print(lovefunc(1, 4))
# True

print(lovefunc(6, 8))
# True

print(lovefunc(0, 0))
# False
