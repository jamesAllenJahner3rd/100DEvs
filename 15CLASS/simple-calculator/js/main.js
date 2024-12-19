let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

// document.querySelector("#pumpkin").addEventListener('click', function(e){makeZero();});
// document.querySelector('#dominosPizza').addEventListener('click',jumanji)

//,function(e){jumanji()})
// ,function(jumanji))
// , =>jumangi(););
//document.querySelector('#zebra').addEventListener('click',add9)
// document.querySelector('cantThinkOfAnything').addEventListener('click',sub2)
// function makeZero(){
// total= 0
// document.querySelector("placeToPutResult").innerText = total
// }
// function jumangi(){
//  total= total+3
// document.querySelector("#placeToPutResult").innerText =total
// }
//function add9(){
// total+=9
// document.querySelector('#placeToPutResult").innerText=total
//}
// function sub2(){

// total =-2 
//document.querySelector('placeToPutResult').innerText =total
// }
// 
//
// 
// 
//
// 
// 
//document.querySelector('a').addEventListener('click',makeZero)
// 
// 
//
// 
// 
//document.querySelector('b').addEventListener('click', add3)
// 
// 
//
// 
// 
//
// 
// 
// document.querySelector('c').addEventListener('click', add9)
// 
//
// 
// 

//document.querySelector('d').addEventListener('click', sub2)
// 







// function makeZero(){
// total = 0
//document.querySelector('placeToPutResult').innerText = total
// }
// 
//
// 
// 
//
// 
// 
//  
// 
//
// 
// 
//
// 
// 
//
// 
// 
//
// 
// 
//
// 
// 
//  