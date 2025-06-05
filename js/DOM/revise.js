console.log("Begin");
// console.log("Begin");

var a = document.querySelector("h1");
// change html
// a.innerHTML = "huhhuhhuh";

// change css
// a.style.border = "5px solid orange";
// a.style.color = "red";
// a.style.backgroundColor = "gray";

// event listener
a.addEventListener("click", function () {
  console.log("clicked on h1");
  a.style.border = "5px solid purple";
  a.style.color = "red";
  a.style.backgroundColor = "gray";
  a.innerText = "changed";
});
