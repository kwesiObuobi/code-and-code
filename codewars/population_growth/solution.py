def nb_year(p0, percent, aug, p):
  # your code
  n = 0
  population = p0
  while True:
    population = int(population + (population * (percent / 100)) + aug)
    
    n += 1
    if population >= p:
      return n
    
print(nb_year(1000, 2.0, 50, 1214))
# 4

print(nb_year(1500000, 2.5, 10000, 2000000))
# 10
