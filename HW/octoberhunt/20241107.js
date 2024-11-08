/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */
/**
 * prep
 * parameter. number
 * return a number associated with the (n)th  of the number.
 * 0,1,1,2,3,5,8,13,21,34,55...
 * 0,1,2,3,4,5,6, 7, 8, 9,10...
 * set an index
 * loop through the till you reach the (n)th number
 *  time number add the number to the previous number. this will make the next number
 * return the last number
 * 
 */
/*function nthFibonacci(number) {
    let fibArray =[0,1]
    let i = 2;
    while (i <=number){
        fibArray[i] = fibArray[i-1]+fibArray[i-2];
        i++
    }
    return fibArray[number];

}*/
function nthFibonacci(number) {
    const nthFinder = new nthFibonacciFinder(number)
    return nthFinder.run()
}
class nthFibonacciFinder {
    constructor(number){
        this._number = number
    }
    run() {
        let fibArray =[0,1]
    let i = 2;
    while (i <=this._number){
        fibArray[i] = fibArray[i-1]+fibArray[i-2];
        i++
    }
    console.log(fibArray[this._number])
    return fibArray[this._number];
    }
}
nthFibonacci(0);
