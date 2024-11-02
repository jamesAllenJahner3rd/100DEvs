// /**Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// }); */
// /**prep 
//  * para array of num a num
//  * return  array of array, pairs of 
// map ket with the  

// */



// const assert = require('assert');

// function twoSum(inputArray,num){
//     //let map = {}
//     let output =[]
   
   /* this dooesn't do 2+2 for example
    let aArray = Array.from({ length: num + 1 }, (_, i) => i);
    aArray.forEach((e,i,a)=>{
        if(num%i ==0){
            map[`${i} +${num%i}`]
    }
})
*/
// inputArray.forEach((e,i,a))=>{
//      if (num%e ===0){
//         if (a.includes{num-e}){
//         map[`${e} + ${num-e}`]
//         output.push([e,num-e])
//         }
//      }
//     map[`${e}`] 
// }
//     for([index,n] of array.entries()){
//         aArray.forEach((e,i,a)=>{
//             if(map[`${e} +${a[i]}`]){
//                 output.push([e,a[i]])
//             }
//         })
//     }
// }
// describe("Two Sum", () => {
//     it("should return pairs that sum up to the given number", () => {
//         assert.deepEqual(aFunction([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]); 
//     }); 
// });
/*

function twoSum(inputArray,num){
    console.log(inputArray,num);
    let output =[];
    inputArray.forEach((e,i,a)=>{
        console.log([e,num-e])
        if (num%e ===0){
            if (a.includes(num-e)){
                output.push([e,num-e])
                console.log(output);
            }
        }
    })
    console.log(output)
}
*/
/* this works-----------------------------------
function twoSum(inputArray,num){
    let output =[];
    //use map to keep track of the numbers
    let map = {};
    //loop through tohe numbers
    for(element of inputArray){
        //if the 4 - x = y, is y in the map?
         if (map[num - element]){
            // output the array that sums to 4
            output.push([num-element, element])
            //mark that we used the y.
            map[num - element]--
        }else{
            //if y isn't in the map, add x to the map till its' used.
            map[element] =1
        }
        */
 /*   }
    console.log('the output:',output)
}
twoSum([1,3, 2, 2, 3, 4], 5)
*/
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
twoSum([1,3, 2, 2, 3, 4], 5)




