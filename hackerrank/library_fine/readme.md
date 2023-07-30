Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

- bIf the book is returned on or before the expected return date, no fine will be charged (i.e.: `fine = 0`).
- If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, `fine = 15 hackos * (the number of days left)`.
- If the book is returned after the expected return month but still within the same calendar year as the expected return date, the `fine = 500 hackos * (the number of months left)`.
- If the book is returned after the calendar year in which it was expected, there is a fixed fine of `10000 hackos`.
Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be `10,000 hackos`.

Example
`d1,m1,y1 = 14,7,2018`
`d2,m2,y2 = 5,7,2018`

The first values are the return date and the second are the due date. The years are the same and the months are the same. The book is `14 - 5 = 9` days late. Return `5 * 9 = 135`.

Click [here](https://www.hackerrank.com/challenges/library-fine/problem) to go see the official problem from [Hackerrank](https://www.hackerrank.com/)