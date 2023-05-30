def workbook(n, k, arr):
  # Write your code here
  specials = 0
  page = 1
  for i in range(n):
    for j in range(arr[i]):
      if j + 1 == page:
        specials += 1
      
      if (j + 1) % k == 0:
        page += 1
    
    if arr[i] % k == 0:
      continue
    
    # only increase the page number when
    # we are not on the last page for k problems
    page += 1
  
  return specials

print(workbook(5, 3, [4, 2, 6, 1, 10]))
# 4

print(workbook(10, 5, [3 ,8 ,15, 11, 14, 1, 9, 2, 24, 31]))
# 8
