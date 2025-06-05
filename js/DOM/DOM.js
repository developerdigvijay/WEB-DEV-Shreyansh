// dom document object model

console.log("DOM");
// selection of an html element
// var a=  document.querySelector("a")
// a.innerText= "keep hustling"
// a.style.color="orange"

var box = document.querySelector(".box");
// box.textContent= "giers/"

box.innerHTML =
  "<a href='#nextpage'><h1>it's </h1></a><a href='#nextpage'><h1>it's a test link</h1></a>";
box.style.color = "red";
box.style.backgroundColor = "pink";
box.style.borderRadius = "10%";
box.style.width = "50%";
box.style.display = "flex";
box.style.flexDirection = "column";

box.addEventListener("click", function changemeh() {
  console.log("elderson");
  box.innerHTML = "javascript is awesome";
});
