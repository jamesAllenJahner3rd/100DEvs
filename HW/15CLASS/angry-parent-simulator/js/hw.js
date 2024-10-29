
document.querySelector('#yell').addEventListener('click',yell)
function yell(){
let firstName = document.querySelector('#firstName').value
let secondName =document.querySelector('#firstMiddle').value
let thirdName =document.querySelector('#lastMiddle').value
let lastName = document.querySelector('#lastName').value

document.querySelector('#placeToYell').innerText = firstName+' ' +secondName+' ' +thirdName+' '+lastName

}