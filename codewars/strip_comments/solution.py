def strip_comments(string, markers):
  new_string = ''
  i = 0
  while i < len(string):
    if string[i] in markers:
      while True:
        i += 1
        
        if i == len(string):
          break
        if string[i] == '\n':
          break
    else:
      new_string += string[i]
      if i + 1 < len(string) and string[i + 1] in markers:
        new_string = new_string.rstrip()
      i += 1
      
  return new_string




print(strip_comments('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
'''
apples, pears
grapes
bananas
---------------------------------------
[or 'apples, pears\ngrapes\nbananas']
'''

print(strip_comments(' a #b\n\nc\nd\n $e f g', ['#', '$']))
'''
 a

c
d
---------------------------
[or ' a\n\nc\nd']
'''