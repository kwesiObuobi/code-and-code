def extraLongFactorials(n):
    # Write your code here
    fact = 1
    while n > 0:
        fact *= n
        n -= 1
    
    print(fact)

extraLongFactorials(25)