def make_readable(seconds):
  # Do something
  s = seconds % 60
  m = (seconds // 60) % 60
  h = (seconds // 60) // 60
  return f'{h:02d}:{m:02d}:{s:02d}'


print(make_readable(86399))
# 23:59:59

print(make_readable(60))
# 00:01:00

print(make_readable(359999))
# 99:59:59
