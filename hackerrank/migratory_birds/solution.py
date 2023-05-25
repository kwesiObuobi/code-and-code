def migratoryBirds(arr):
  arr_dict = {}
  max_values = []
  max = 0
  for i in range(len(arr)):
    if arr_dict.get(arr[i]):
      arr_dict[arr[i]] = arr_dict[arr[i]] + 1
    else:
      arr_dict[arr[i]] = 1
      
      
    if arr_dict[arr[i]] == max:
      max_values.append(arr[i])
        
    if arr_dict[arr[i]] > max:
      max_values.clear()
      max_values.append(arr[i])
      max = arr_dict[arr[i]]
        
  return min(max_values)


print(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]))
# 3

print(migratoryBirds([1,4,4,4,5,3]))
# 4
