def divisibleSumPairs(n, k, ar)
  pairs = 0
  
  i = 0
  while i < n
    j = i + 1
    while j < n
      pairs += 1 if (ar[i] + ar[j]) % k == 0
      j += 1
    end
    i += 1
  end
  
  pairs
    
end

puts(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))
# 5

puts(divisibleSumPairs(6, 5, [1,2,3,4,5,6]))
# 3
