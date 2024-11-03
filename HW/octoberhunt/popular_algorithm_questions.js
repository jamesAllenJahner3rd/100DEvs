/*1. String Reversal
Given a string of characters as input, write a function that returns it with the characters reversed.

describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});*/
/**prep
 * parameter: string of characters.any
 * return: a reversed string of characters.
 * "Hello World!", "!dlroW olleH"
 * Leon, noeL
 * apples, selppa
 * codeWars style to :
 * turn to array, unshift to another an ouput array.
 */
function reverse(string) {
    return string.reverse();
}
function reverse1(string) {
    let outputArray
    string.split("")
        .array.forEach(element => {
        outputArray.unshift(element);
        });
    return outputArray.join()
}
function reverseReduce(string) {
    return string.reduce((acc, element) => {
        acc = element + acc;
    },'')///hello => h+'', e+h", l+eh loooks good.
}
// time complexity: linear
//space complexity: constant.
/*A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

describe("Palindrome", () => {
 it("Should return true", () => {
  assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 });
 it("Should return false", () => {
  assert.equal(isPalindrome("sit ad est love"), false);
 });
});
*/
/**
 * prep 
 * parameter: a string. no nums
 * return true or false whether we can reverse the string
 * Cigar? Toss it in a can. It is so tragic"), true
 * "sit ad est love", false
 * We GO GET!, false 
 * lowercase everything
 * remove spaces and punct
 * reverse it
 * compare it
 */
function isPalindrome(string) {
    let stringOfLetters = string.toLowerCase()

    for(letter of stringOfLetters){
        if(letter.charCodeAt(0) <97 ||letter.charCodeAt(0) >122 ){
            stringOfLetters =stringOfLetters.replace(letter,'')
        }
    }
    return stringOfLetters === stringOfLetters.split('').reverse().join("")
}
isPalindrome("Cigar? Toss it in a can. It is so tragic") 

// time complexity: linear
//space complexity: constant.
