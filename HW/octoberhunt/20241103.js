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
/*
function fizzBuzz(number){
     let output =[]
     for(let i =1;i<= number;i++){ 
       console.log(i,(i%2 ===0 &&i%3 ===0))
        if(i%2 ===0 &&i%3 ===0){
            output.push('Fizz Buzz')
           
        }
        if(i%2 ===0){
            output.push("Fizz")
            console.log(i%2)
        }else if(i%3 ===0){
            output.push('Buzz')

        }else{
            output.push(i)
        }
        
    }
    console.log(output)
}*/
/*function fizzBuzz(number){
    this.number = Array.from({length:number},(_,i)=>i+1);
    
    console.log(this.number);
    for (const[index, value] of this.number.entries()) {
        //console.log(index, value);
        (value%2 ===0 && value%3 ===0)  &&(console.log("Fizz Buzz"));
        (value%2 ===0)                  &&(console.log("Fizz"));
        (value%3 ===0)                  &&(console.log("Buzz"));
        (value%2 !==0 && value%3 !==0)  &&(console.log(value));

    }
}*/
/*function fizzBuzz(number){
    this.number = Array.from({length:number},(_,i)=>i+1);
    for (const value of this.number) {
        let map ={
            'Fizz':'',
            "Buzz":"",
            'value':''
        };
    (value%6 ===0 && value%3 ===0)      && ((map.Fizz= "Fizz ") && (map.Buzz ="Buzz"));
    (value%2 ===0)                      && (map.Fizz= "Fizz ") ;
    (value%3 ===0)                      && (map.Buzz ="Buzz");
    (value%2 !==0 && value%3 !==0)      && (map.value = value);
    console.log(`${map.Fizz}${map.Buzz}${map.value}`);
    }

}


fizzBuzz(15)*/
function twoSum(inputArray,num){
    summer = new SumFinder(inputArray,num);
    console.log(summer.run())
}
/*5. Max Character
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});*/
/*
prep 
parameter string
return  char most common
fffffffffffffff, f
fffffssss   ss , s
fff ddd ,fd
loop through the string 
    record  and count the char's
return the char
*/
function max(Astring){
    return new TheMost(Astring).run()
}
class TheMost {
    constructor(aString){
        this._string = aString;
        this._map={};
        //this._aString()
    }
    run(){
        for(let letter of this._string){
            this._map[letter] = this._map +1 ||1
        }
    }
}
max("sdlkf")
