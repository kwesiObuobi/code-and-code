def sockMerchant(n, ar):
    pair = 0
    hashAr = {}

    for i in range(n):
      if hashAr.get(ar[i]):
          hashAr[ar[i]] = hashAr[ar[i]] + 1
          
          if hashAr[ar[i]] % 2 == 0:
              pair += 1

      else:
          hashAr[ar[i]] = 1
    
    return pair

print(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))
