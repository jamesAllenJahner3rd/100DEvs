//Create an array of movie titles. Loop through the array and each element to the h2.
let movies=[movie1, movie2, movie3];
let heaad= document.querySelector('h2')
movies.forEach((e) => heaad.innerHTML +=e)

//Create an array of numbers. Loop through the array, add three to each number and replace the old number.

let nums=[nums[0],nums[1],nums[2]]
for(let i=0;i<nums.length;i++){
    nums[i] +=3 
}
nums.forEach((e,i) => {num[i]+=3})
//Find the average of all the numbers from question three
nums
function avg (x){
let sum=0;
nums.forEach(e=>{sum+=e});
for(let i=0;i<nums.length;i++){
     sum+=nums[i]
}
return sum/nums.length
}