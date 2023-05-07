const extraLongFactorial = (n) => {
  const factorial = (n) => {
    n = BigInt(n);
    if (n <= BigInt(1)) {
      return n;
    }

    return n * factorial(n - BigInt(1));
  }

  const answer = factorial(n);
  console.log(answer.toString());
}

extraLongFactorial(25);
