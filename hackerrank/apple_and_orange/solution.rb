def countApplesAndOranges(s, t, a, b, apples, oranges)
  # Write your code here
  apples_in_range = 0
  oranges_in_range = 0
  
  apples.each { |apple| apples_in_range += 1 if apple + a >= s && apple + a <= t }
  oranges.each { |orange| oranges_in_range += 1 if orange + b >= s && orange + b <= t }

  puts apples_in_range
  puts oranges_in_range
end

countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])
# 1
# 2
