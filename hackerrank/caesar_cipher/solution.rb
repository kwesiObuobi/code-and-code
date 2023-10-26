def caesarCipher(s, k)
  # Write your code here
  new_s = ""

  s.each_char do |item|
    if item.match?(/[[:alpha:]]/)
      caps = item == item.upcase  # Check if the character is uppercase
      base = caps ? 'A' : 'a'
      shifted = (item.ord - base.ord + k) % 26
      new_char = (base.ord + shifted).chr
      new_s << (caps ? new_char.upcase : new_char)
    else
      new_s << item
    end
  end

  new_s

end

puts(caesarCipher('middle-Outz', 2))
# okffng-Qwvb

puts(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5))
# Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
