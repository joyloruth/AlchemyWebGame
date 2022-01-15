//element array
let elements = ["/images/water.png", "/images/fire.png", "/images/air.png", "/images/earth.png"];
let elementList = document.getElementById("elementList");

//iterating through element array and creating img elements and appending to element list
elements.forEach((element)=>{
  let elementId = document.createElement("IMG");
  elementId.setAttribute("src", element);
  elementId.setAttribute("width", 50);
  elementId.setAttribute("height", 55);
  elementId.setAttribute("draggable", true);
  elementId.style.cursor = "pointer";

  var elementCopy;
  //start dragging elements
  elementId.addEventListener("dragstart", () =>{
    let mixture = document.getElementById("mixtureContainer");
    elementCopy = document.createElement("IMG");
    elementCopy.setAttribute("src", element);
    elementCopy.setAttribute("width", 50);
    elementCopy.setAttribute("height", 55);
    elementCopy.setAttribute("draggable", true);
    elementCopy.style.position = "absolute";
    elementCopy.style.cursor = "pointer";
    elementCopy.style.margin = "10px";
    elementCopy.style.right = "90px";
    mixture.appendChild(elementCopy);
  })
  
  //append array elements to list div 
  elementList.appendChild(elementId);
  
})


let colors = ["red", "blue", "yellow"];

colors.forEach((color)=>{
  let name = document.createElement("p");
  name.innerText = color;
  elementList.appendChild(name);
  name.setAttribute("draggable", true);
  name.style.cursor = "pointer";
})

var dragValue;

function move(id){
  var circle = document.getElementById("ball");
  circle.style.position = "absolute";
  circle.onmousedown = function(){
    dragValue = circle;
  }
}

document.onmouseup = function(e){
  dragValue = null;
}

document.onmousemove = function(e){
  var x = e.pageX;
  var y = e.pageY;

  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
}

