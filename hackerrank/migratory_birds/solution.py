def migratoryBirds(arr):
  arrDict = {}
  maxValues = []
  max = 0
  for i in range(len(arr)):
    if arrDict.get(arr[i]):
      arrDict[arr[i]] = arrDict[arr[i]] + 1
    else:
      arrDict[arr[i]] = 1
      
      
    if arrDict[arr[i]] == max:
      maxValues.append(arr[i])
        
    if arrDict[arr[i]] > max:
      maxValues.clear()
      maxValues.append(arr[i])
      max = arrDict[arr[i]]
        
  return min(maxValues)


print(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))
# 3

print(migratoryBirds([1,4,4,4,5,3]))
# 4
