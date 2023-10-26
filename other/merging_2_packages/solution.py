def get_indices_of_item_wights(arr, limit):
  weight_indices = {}

  for i in range(len(arr)):
      weight = arr[i]
      complement = limit - weight
      if complement in weight_indices:
          return [i, weight_indices[complement]]
      weight_indices[weight] = i

  return []

print(get_indices_of_item_wights([9], 9))
# []

print(get_indices_of_item_wights([4, 6, 10, 15, 16], 21))
# [3, 1]

print(get_indices_of_item_wights([12, 6, 7, 14, 19, 3, 0, 25, 40], 7))
# [6, 2]
