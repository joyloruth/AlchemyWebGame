const move = function(element){
  const elements = document.querySelectorAll(".primaryElement");
 
  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
       element.style.position = "absolute";
      
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseElement.style.left    = x + "px";
        chooseElement.style.top     = y + "px";

        let STEAMY = fire.style.top == water.style.top || fire.style.left == water.style.left;
        let SMOKY  = fire.style.top == air.style.top || fire.style.left == air.style.left;
        let MUDDY  = earth.style.top == water.style.top || earth.style.left == water.style.left;
        let LAVAY  = fire.style.top == earth.style.top || fire.style.left == earth.style.left ;

        // Check if a combined element for the current combination has already been created
        let combinedElementExists = document.querySelector(".combinedElement");

        if (STEAMY && !combinedElementExists) {
          let steam = document.createElement("DIV");
          steam.innerText = "steam";
          steam.className = "combinedElement";
          steam.style.backgroundImage = "url('images/steam.png')";
          steam.style.backgroundRepeat = "no-repeat";
          steam.style.backgroundPosition = "center";
          elementSpace.appendChild(steam);
          moveMixture(steam);
        }
        // Add similar checks for other combinations
      }
    })
  })

  document.onmouseup = function(e){
    chooseElement=null;
  }
}
