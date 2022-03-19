let chooseElement;
let chooseMixture;
let elementSpace = document.getElementById("elementSpace");


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

        switch(chooseElement.style.top == chooseElement.style.top || chooseElement.style.left == chooseElement.style.left) {
          case STEAMY:
            let steam = document.createElement("DIV");
            steam.innerText="steam";
            steam.className="combinedElement";
            steam.style.backgroundImage = "url('images/steam.png')";
            steam.style.backgroundRepeat = "no-repeat";
            steam.style.backgroundPosition = "center";
            elementSpace.appendChild(steam);
            moveMixture(steam);
            break;
          case SMOKY:
            let smoke = document.createElement("DIV");
            smoke.innerText="smoke";
            smoke.className="combinedElement";
            elementSpace.appendChild(smoke);
            smoke.style.backgroundImage = "url('images/smoke.png')";
            smoke.style.backgroundRepeat = "no-repeat";
            smoke.style.backgroundPosition = "center";
            moveMixture(smoke);
            break;
          case MUDDY:
            let mud = document.createElement("DIV");
            mud.innerText="mud";
            mud.className="combinedElement";
            elementSpace.appendChild(mud);
            mud.style.backgroundImage = "url('images/mud.png')";
            mud.style.backgroundRepeat = "no-repeat";
            mud.style.backgroundPosition = "center";
            moveMixture(mud);
            break;
          case LAVAY:
            let lava = document.createElement("DIV");
            lava.innerText="lava";
            lava.className="combinedElement";
            elementSpace.appendChild(lava);
            lava.style.backgroundImage = "url('images/lava.png')";
            lava.style.backgroundRepeat = "no-repeat";
            lava.style.backgroundPosition = "center";
            moveMixture(lava);
            break;
        case BRICKY:
            let brick = document.createElement("DIV");
            brick.innerText="brick";
            brick.className="combinedElement";
            elementSpace.appendChild(brick);
            brick.style.backgroundImage = "url('images/brick.png')";
            brick.style.backgroundRepeat = "no-repeat";
            brick.style.backgroundPosition = "center";
            moveMixture(brick);
            break;
          default:
            console.log("h");
        }

        /*
        if(fire.style.top == water.style.top || fire.style.left == water.style.left){
          // let steamy = document.getElementById("steam");
          // steamy.style.opacity = 100;
          // elementSpace.appendChild(steamy);

          let steam = document.createElement("DIV");
          steam.innerText="steam";
          steam.className="combinedElement";
          elementSpace.appendChild(steam);
          moveMixture(steam);
        }

        if(fire.style.top == air.style.top || fire.style.left == air.style.left){
          let smoke = document.createElement("DIV");
          smoke.innerText="smoke";
          smoke.className="combinedElement";
          elementSpace.appendChild(smoke);
          moveMixture(smoke);
          if(smoke==true){
            elementSpace.removeChild(smoke);
          }
        }
        if(water.style.top === earth.style.top || earth.style.left == water.style.left){
          let mud = document.createElement("DIV");
          mud.innerText="mud";
          mud.className="combinedElement";
          elementSpace.appendChild(mud);
          moveMixture(mud);
        }
        
        if(fire.style.top == earth.style.top || fire.style.left == earth.style.left ){
          let lava = document.getElementById("lava");
          lava.style.opacity = 100;
          elementSpace.appendChild(lava);
          elementSpace.style.position ="absolute";
        }*/
      }
    })
  })

    document.onmouseup = function(e){
      chooseElement=null;
    }
}

  //add dragging to combined elements
const movesMixture = function(mixture){
  const mixtures = document.querySelectorAll(".combinedElement");
 
  mixtures.forEach(mixture => {
    mixture.addEventListener("mousedown", () => {
      mixture.style.position = "absolute";
      chooseMixture = mixture;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseMixture.style.left = x + "px";
        chooseMixture.style.top  = y + "px";
      }
    })
  })

  document.onmouseup = function(e){
    chooseMixture=null;
    chooseElement=null;
  }
}


const moveMixture = function(mixture){
  const mixtures = document.querySelectorAll(".combinedElement");
 
  mixtures.forEach(mixture => {
    mixture.addEventListener("mousedown", () => {
      mixture.style.position = "absolute";
      chooseMixture = mixture;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseMixture.style.left = x + "px";
        chooseMixture.style.top  = y + "px";
      }
    })
  })

  document.onmouseup = function(e){
    chooseMixture=null;
    chooseElement=null;
  }
}

