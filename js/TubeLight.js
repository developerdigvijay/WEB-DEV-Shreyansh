// let x= document.querySelector(".tubeLight")
// x.addEventListener("click",function fun() {
//     console.log("clicked");
// })
// let x = document.querySelector(".tubeLight")
// x.style.borderRadius="100%"

// let x = document.querySelector(".tubeLight")
// x.addEventListener("click",function(){
//     console.log("clicked");
//     x.style.backgroundColor="blue"
//     x.innerHTML= "Loading.."
// })

let tube = document.querySelector(".tubeLight");
var flag = 0;
tube.addEventListener("click", function () {
  if (flag == 0) {
    tube.style.backgroundColor = "white";
    console.log("switch toggle");
    flag = 1;
  } else {
    tube.style.backgroundColor = "black";
    console.log("switch toggle again");
    flag = 0; 
  }
});
