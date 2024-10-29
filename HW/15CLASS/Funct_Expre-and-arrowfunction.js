// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );


// ask = (question,yes,no)=> confirm(question)?  yes(): no()

// ask( "Do you agree?",
//   ()=> alert("You agreed."),
//   ()=> alert("you canceled the execution.")
// )


// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// sign = window.prompt("How many times shall the carousel turn?", "Pick a number.");
// let turns=1
// while (turns <=10){
//   let times = (turns == 1)? 'time' :'times'
//   console.log('The carousel turns ' + turns + times)
// turns+=1
// }

// carousel repeats 10tims . so i know to iterations so for loo is best

// display each time
// let sign = window.prompt("What is the starting number?","100 or less")
// while (sign > 100){
//     sign = window.prompt("Hey! I said 100 or less! Pay attention!","100 or less")
//   }
//   function getRandomIntInclusive(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
//   }
//    let term =getRandomIntInclusive(50, 100)
// for (let i = 1; i <= term; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
//   else{
//       console.log(`${i} is odd`);
//     }
//   }

  // Write a program that asks the user for a number, then shows the multiplication table for this number.


// // ask for a number
// let number = prompt ("If you give me a number between 2 and 9 I'll give you a multiplication table")
// while(number >9 || number<2){
//   number = prompt ("If you PLEASE give me a number between 2 and 9 I'll give you a multiplication table")
// }
// // show the mult table
// let i = 0
// while( i <= 10){
//   console.log( i +' x '+ number + ' = ' + (number*i) )
//   i+=1
// }

// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// || text !='yes'
// the program asks the user to enter text
// let text = prompt("type text. play the game.")
// while (text != 'no'&& text !='yes' ){
//   console.log(text !='no')
//   console.log(text !='yes')
//  text = prompt("type more text. You haven't lost the game yet.")
// }
// console.log('you lost')


// FizzBuzz
// // Write a program that shows all numbers between 1 and 100 with the following exceptions:
// let number = 1
// while(number <=100){
//   if (number%3== 0){
//     if(number%5== 0){
//       console.log('FizzBuzz')
//     }
//     console.log('Fizz')
//   }else if(number%5 ==0){
//     console.log("Buzz")
//   }else{
//   console.log(number)
//   }
//   number++
// }


// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.



n =prompt("how many turns")
for(let i =1; i<=n;i++){
  console.log(i)
}

n= Number(prompt("where to start?"))
for (let i = n; i <= n+10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }else{
    console.log(`${i} is odd`);
  }
}