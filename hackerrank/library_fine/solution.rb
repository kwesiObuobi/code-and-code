def libraryFine(d1, m1, y1, d2, m2, y2)
  # Write your code here
  fine = 0
  if y1 < y2
    return 0
  elsif y1 > y2
    return 10000
  end
  
  if y1 == y2 && m1 > m2
    return 500 * (m1 - m2)
  end
  
  if m1 == m2 && d1 > d2
    return 15 * (d1 - d2)
  end
  
  return fine
end

puts(libraryFine(6, 6, 2015, 9, 6, 2016))
# 0

puts(libraryFine(9, 6, 2015, 6, 6, 2015))
# 45

puts libraryFine(6, 6, 2015, 9, 6, 2016)
# 0
