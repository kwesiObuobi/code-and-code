def dayOfProgrammer(year)
  # sum of all days from Jan - Aug, except Feb
  months = 215
  feb = 0
  
  # The next day after Jan 31st was Feb 14th
  months -= 13 if year == 1918
  
  if year < 1919
    # Julian calendar
    year % 4 == 0 ? feb = 29 : feb = 28
  else
    # Gregorian calendar
    if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
      feb = 29
    else
      feb = 28
    end
  end
  
  day_of_programmer = 256 - (months + feb)
  return "#{day_of_programmer}.09.#{year}"
end

puts(dayOfProgrammer(2017))
# 13.09.2017

puts(dayOfProgrammer(2016))
# 12.09.2016

puts(dayOfProgrammer(1800))
# 12.09.1800
