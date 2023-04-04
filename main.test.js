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

  describe('Subtraction Operations', () => {
    it('should subtract 7 + 3 to equal 4', () => {
      const result = calculator.subtract(7, 3);

      expect(result).toBe(4);
    });

    it('should subtract 100 - 3 to not be equal to 96', () => {
      const result = calculator.subtract(100, 3);

      expect(result).not.toBe(96);
    });

    it('should subtract (100 + 3) - 3 to be equal to 100', () => {
      const result = calculator.subtract((100 + 3), 3);

      expect(result).toBe(100);
    });
  });

  describe('Division Operations', () => {
    it('should divide 6 / 3 to equal 2', () => {
      const result = calculator.divide(6, 3);

      expect(result).toBe(2);
    });

    it('should divide 100 / 20 to not be equal to 6', () => {
      const result = calculator.divide(100, 20);

      expect(result).not.toBe(6);
    });

    it('should divide 100 / 20 to be equal to 5', () => {
      const result = calculator.divide(100, 20);

      expect(result).toBe(5);
    });
  });

  describe('Multiplication Operations', () => {
    it('should multiply 2 * 3 to equal 6', () => {
      const result = calculator.multiply(2, 3);

      expect(result).toBe(6);
    });

    it('should multiply 2 * 6 to not be equal to 5', () => {
      const result = calculator.multiply(2, 6);

      expect(result).not.toBe(5);
    });

    it('should multiply 2 * 100 to be equal to 200', () => {
      const result = calculator.multiply(2, 100);

      expect(result).toBe(200);
    });
  });
});

test('capitalize a string', () => {
  const str = capitalize('programming');

  expect(str).toBe('Programming');
})