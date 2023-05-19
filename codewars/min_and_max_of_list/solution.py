def minimum(arr):
  arr.sort()
  return arr[0]

def maximum(arr):
  arr.sort()
  return arr[-1]

print(minimum([-52, 56, 30, 29, -54, 0, -110]))
# -110

print(maximum([-52, 56, 30, 29, -54, 0, -110]))
# 56
