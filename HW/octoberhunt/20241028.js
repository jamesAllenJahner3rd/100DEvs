/**
 
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
 */
/**
 * para: a string
 * return a char
 * use a for of loop to loop through the string
 *  check in the char is been added to the hexmap
 * incrament the hex map is so.
 */
function max(string){
    //store the occurrence of the char
    let map = {};
    let greatestChar = ''
    let mostNum = 0
    // count the occurrence of the char in the strings
    for(char of string){
        if(!map[char]){
            map[char] = 1;
        }else{
            map[char]++;
        }
    }
    //loop through to find which obj has the most occurences
    for (const obj in map){
        if (map[obj] > mostNum){
            mostNum = map[obj] ;
            greatestChar = obj
        }
    }
    return greatestChar;
}