# @param {Integer[]} nums
# @return {Integer}

def remove_duplicates(nums)
  j = 0

  (1..nums.length - 1).each do |i|
    if nums[i] != nums[j]
      j += 1
      nums[j] = nums[i]
    end
  end

  return j + 1
end

puts(remove_duplicates([1, 1, 2]))
# 2

puts(remove_duplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
# 5
