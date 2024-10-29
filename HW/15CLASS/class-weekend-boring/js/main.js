 document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if (day==="sunday"||day ==="saturday"){
    document.querySelector("#placeToSee").innerText="Weekend"
  }
  else if (day ==="monday"||day==="wednesday"||day==="friday"){
    document.querySelector('#placeToSee').innerText= "Boring Day"
  }
  else if(day ==="tuesday"||day=== "thursday"){
    document.querySelector("#placeToSee").innerText ="Class"
}
}
// }
// else if(day==="Wednesday"){
//   document.querySelector(#placeToSee).append("Boring Day")
// }
// else if(day ==="Thurdsay"){
//   document.querySelector("#placeToSee").set{"Class"}
// }
// }
// else if(day ==="Friday"){
// document.querySelector(#placeToSee).append("Boring Day")
// }
// els if(day === "Saturday"){
//   document.querySelector("#placeToSee").set{"Weekend"}
// }
// else{
//   document.querySelector("#placeToSee").set{"huh?"}
// }
// }if(b>n){}
// return n>c || "dodo"
// 
// return (c>n)? 'true' : 'false'
// 
// 
