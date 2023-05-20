
# Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format `(HH:MM:SS)`

```
HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
```

For Example:
```
make_readable(0) --> "00:00:00"
make_readable(86399) --> "23:59:59"
```


Click [here](https://www.codewars.com/kata/52685f7382004e774f0001f7/train/python) to see the original problem on [codewars.com](https://www.codewars.com)
