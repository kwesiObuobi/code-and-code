function caesarCipher(s, k) {
  let answer = "";
  const regex = /[A-Za-z]/;
  for (let i = 0; i < s.length; i++) {
    if (regex.test(s[i])) {
      let caps = s[i] === s[i].toUpperCase();
      let base = caps ? 'A' : 'a';
      let shifted = (s[i].charCodeAt(0) - base.charCodeAt(0) + k) % 26;
      let newChar = String.fromCharCode(base.charCodeAt(0) + shifted)
      answer += caps ? newChar.toUpperCase() : newChar;
    } else {
      answer += s[i];
    }
  }
  return answer;
}

console.log(caesarCipher('middle-Outz', 2))
// okffng-Qwvb

console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5))
// Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj
