const {stringLength, reverseString, Calculator} = require('./main');

describe('String Length', () => {
  it('should return the correct length of the string', () => {
    const length = stringLength('kwesi') ;

    expect(length).toBe(5);
  });

  it('should return an error if the string has less than 1 character', () => {
    const length = stringLength('');

    expect(length).toBe('invalid input');
  });

  it('should return an error if the string has more than 10 character', () => {
    const length = stringLength('Programming is fun');

    expect(length).toBe('invalid input');
  });
});

describe('Reversing a string', () => {
  it('should return a reversed string', () => {
    const reversedString = reverseString('saMMy');

    expect(reversedString).toBe('ymmas');
  })
})

describe('Calculator Operations', () => {
  const calculator = new Calculator();

  describe('Addition Operations', () => {
    it('should add 2 + 3 to equal 5', () => {
      const result = calculator.add(2, 3);

      expect(result).toBe(5);
    });

    it('should add 100 + 3 to not be equal to 104', () => {
      const result = calculator.add(100, 3);

      expect(result).not.toBe(104);
    });

    it('should add (100 + 3) + 10 to be equal to 113', () => {
      const result = calculator.add((100 + 3), 10);

      expect(result).toBe(113);
    });
  });
});