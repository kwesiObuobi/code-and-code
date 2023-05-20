def solution(string,markers):
  #Holds each splitted line
  stripped_lines = []
  #Loop through each line
  for line in string.split('\n'):
    #Loop through markers to check if marker in line
    for marker in markers:
      if marker in line:
        #Line is equal to everything up to the index of marker
        line = line[:line.index(marker)]
    #Add splitted line with trailing whitespace removed to stripped_lines list
    stripped_lines.append(line.rstrip())
      
  #Join splitted lines back together with \n from the list
  return '\n'.join(stripped_lines)