

// function pow(x,n){
//     let m=1;
//     for(let i=1; i<=n; i++){
//         m=m*x;
//     }
//     return m;
//     }

// document.querySelector(".btn").addEventListener('click', function(e)  {
//     e.preventDefault();
//     let x =document.querySelector('#x').value;
//     let n=document.querySelector("#n").value;
//     document.querySelector("h2").innerHTML= pow(x,n);


// });
function pow(x,n){
    let m=1;
    for(let i=1;i<=n; ++i){
        m*=x;//m=m*x
        }
        return m;
}
document.querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    let x= document.querySelector('#x').value;
    let n= document.querySelector('#n').value;
 if (n>=0){
    document.querySelector('h2').innerHTML =pow(x,n);
}
else{
    document.querySelector('h2').innerHTML ="You aren't allowed to use negative numbers.";
}});
// document.querySelector('.btn').addEventListener('click', function(e){
//     e.preventDefault();
//     let x = Number(document.querySelector('#x').value);
//     let n = Number(document.querySelector('#n').value);
//     console.log('x:', x, 'n:', n);
//     // console.log('?',n>0);  // Debugging line to check the values of x and n
//     if (n > 0) {
//         document.querySelector('h2').innerHTML = pow(x, n);
//     } else {
//         console.log('Else block executed'); // Debugging line to check if the else block is executed
//         document.querySelector('h2').innerHTML = "You aren't allowed to use negative numbers.";
//     }
// });