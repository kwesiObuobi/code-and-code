def filter_list(l):
  new_list = []
  for i in range(len(l)):
    if type(l[i]) == int:
      new_list.append(l[i])
  
  return new_list

print(filter_list([1, 2, 'a', 'b']))
# [1, 2]

print(filter_list([1, 'a', 'b', 0, 15]))
# [1, 0, 15]
