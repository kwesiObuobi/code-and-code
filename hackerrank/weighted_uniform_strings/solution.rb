require 'set'

def weighted_uniform_strings(s, queries)
  count = 1
  prev = nil
  base = 'a'.ord
  weights = []

  s.split('').each do |num|
    # get the integer ordinal (numeric value) of the character
    ord_num = ((num.downcase.ord - base) + 1)

    if ord_num == prev
      count += 1
      weights.append(prev * count)
    else
      count = 1
      prev = ord_num
      weights.append(ord_num)
    end
  end

  # convert the weights to a set, for 0(1) lookups
  weights_set = weights.to_set

  queries.each_with_index do |item, index|
    if weights_set.include?(item)
      queries[index] = 'Yes'
    else
      queries[index] = 'No'
    end
  end

  return queries

end

print(weighted_uniform_strings('abccddde', [6, 1, 3, 12, 5, 9, 10]))
# ['Yes', 'Yes', 'Yes', 'Yes', 'No', 'No']

print(weighted_uniform_strings('aaabbbbcccddd', [9, 7, 8, 12, 5]))
# ['Yes', 'No', 'Yes', 'Yes', 'No']

print(weighted_uniform_strings('abbcccddd', [1, 7, 5, 4, 15]))
# ['Yes', 'No', 'No', 'Yes', 'No']
