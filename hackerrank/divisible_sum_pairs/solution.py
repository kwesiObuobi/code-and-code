def divisibleSumPairs(n, k, ar):
  # Write your code here
  pairs = 0
  for i in range(n):
    for j in range(i+1, n):
      if (ar[i] + ar[j]) % k == 0:
        pairs += 1
            
  return pairs

print(divisibleSumPairs(6, 3, [1,3,2,6,1,2]))
# 5

print(divisibleSumPairs(6, 5, [1,2,3,4,5,6]))
# 3
