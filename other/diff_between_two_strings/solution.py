def diffBetweenTwoStrings(source, target):
  """
  @param source: str
  @param target: str
  @return: str[]
  """
  #pass #your code goes here
  if len(source) == 0:
    return ["+" + ch for ch in target]
  if len(target) == 0:
    return ["-" + ch for ch in source]

  if source[0] == target[0]:
    return [source[0]] + diffBetweenTwoStrings(source[1:], target[1:])
  
  # Try deleting the first character of source
  delete_edit = ["-" + source[0]] + diffBetweenTwoStrings(source[1:], target)

  # Try inserting the first character of target into source
  insert_edit = ["+" + target[0]] + diffBetweenTwoStrings(source, target[1:])

  # Choose the edit sequence with the minimum length
  if len(delete_edit) <= len(insert_edit):
    return delete_edit
  else:
    return insert_edit

print(diffBetweenTwoStrings('ABCDEFG', 'ABDFFGH'))
# ['A', 'B', '-C', 'D', '-E', 'F', '+F', 'G', '+H']

print(diffBetweenTwoStrings('CBBC', 'CABAABBC'))
# ['C', '+A', 'B', '+A', '+A', 'B', '+B', 'C']

print(diffBetweenTwoStrings('CABAAABBC', 'CBBC'))
# ['C', '-A', 'B', '-A', '-A', '-A', 'B', '-B', 'C']
