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
class SumFinder{
    constructor(inputArray,num){
        this._output =[];
        //use map to keep track of the numbers
        this._map = {};
        this._inputArray = inputArray;
        this._num = num;
    }
    //loop through the numbers
    run(){
        for(let element of this._inputArray){
            //if the 4 - x = y, is y in the map?
            (this._map[this.sub(this._num,element)])
            // output the array that sums to 4
            &&( this._output.push([this._num-element, element]) 
            //mark that we used the y.
            &&( this._map[this.sub(this._num,element)]--))
            //if y isn't in the map, add x to the map till its' used.
            ||(this._map[element] =1);
        }
    return this._output
    }
    sub = (num1,num2) => num1 - num2;
}

twoSum([1,2,3,4,5,5],4)
// summer.run()
// summer.run()
// summer.run()