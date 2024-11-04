/**3. Integer Reversal
Given an integer, reverse the order of the digits.

describe("Integer Reversal", () => {
 it("Should reverse integer", () => {
  assert.equal(reverse(1234), 4321);
  assert.equal(reverse(-1200), -21);
 });
});
 */
/**
 * prep
 * parameter  integer
 * return an integar backwards
 * 1234567890=> 0987654321
 * 65431 =>65431
 * 76754 =>45767
 * loop through the string
 * add a output string to the element
 * return the output
 *//*
function reverse(number){
    reversal = new  BackwardNumber(number);
    return reversal.run();
    }

class BackwardNumber{
    constructor(number){
        this._number = number;
    }

    run(){
        
        let output =''
        for(let digit of `${this._number}`){
            (digit ==='-')||
            (output = digit +output);
        }
        console.log((Math.sign(this._number) * +output));
        return Math.sign(this._number) * +output;
    }
} 
reverse (-12345)*/
/**4. Fizz Buzz
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

describe("Fizz Buzz", () => {
 beforeEach(() => (output = fizzBuzz(30)));
 it("Should output number", () => {
  assert.equal(output[0], 1);
 });
 it("Should output Fizz", () => {
  assert.equal(output[1], "Fizz");
 });
 it("Should output Buzz", () => {
  assert.equal(output[2], "Buzz");
 });
 it("Should output Fizz Buzz", () => {
  assert.equal(output[5], "Fizz Buzz");
 });
}); */
/*prep
parameter number
return array of number 1 to number, if even 'fizz', if /3  Buzz, if both fizzBuzz
if  /2 &&/3 push fizzbuzz
if /2 push fizz
if  /3   push buzz
return output array
*/
function(number){
    let output =[]
}