def dayOfProgrammer(year):
  months = 215
  feb = 0
  
  if year == 1918:
    months -= 13

  if year < 1919:
    feb = 29 if year % 4 == 0 else 28
  else:
    feb = 29 if (year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)) else 28
    
  day_of_programmer = 256 - (months + feb)
  return f"{day_of_programmer}.09.{year}"

print(dayOfProgrammer(2017))
# 13.09.2017

print(dayOfProgrammer(2016))
# 12.09.2016

print(dayOfProgrammer(1800))
# 12.09.1800
