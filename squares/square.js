// var circles = document.querySelectorAll(".circle");

//  circles.forEach((cir)=>{
  
//  })

// let demos = document.getElementById("demo");
// demos.innerHTML = "hello";

// var first = document.querySelector(".one");
// first.innerHTML="first";
// //first.style.backgroundColor = "blue";

// var second = document.querySelector(".two");
// second.innerHTML="second";

var chooseElement;

const move = function(element){
  const elements = document.querySelectorAll(".element");
 
  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseElement.style.left = x + "px";
        chooseElement.style.top  = y + "px";
      }
    })
  })

  document.onmouseup = function(e){
    chooseElement=null;
  }
}