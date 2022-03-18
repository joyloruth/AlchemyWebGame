let chooseElement;
let chooseMixture;
let container = document.getElementById("elementSpace");
let a;
let b;

const move = function(element){
  const elements = document.querySelectorAll(".primaryElement");
 
  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      
      chooseElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chooseElement.style.left = x + "px";
        chooseElement.style.top  = y + "px";

        let STEAMY = fire.style.top == water.style.top || fire.style.left == water.style.left;
        let SMOKY = fire.style.top == air.style.top || fire.style.left == air.style.left;

        switch(chooseElement.style.top == chooseElement.style.top || chooseElement.style.left == chooseElement.style.left) {
          case STEAMY:
            let steam = document.createElement("DIV");
            steam.innerText="steam";
            steam.className="combinedElement";
            container.appendChild(steam);
            moveMixture(steam);
            break;
          case SMOKY:
            let smoke = document.createElement("DIV");
            smoke.innerText="smoke";
            smoke.className="combinedElement";
            container.appendChild(smoke);
            moveMixture(smoke);
            break;
          default:
            
        }

        /*
        if(fire.style.top == water.style.top || fire.style.left == water.style.left){
          // let steamy = document.getElementById("steam");
          // steamy.style.opacity = 100;
          // container.appendChild(steamy);

          let steam = document.createElement("DIV");
          steam.innerText="steam";
          steam.className="combinedElement";
          container.appendChild(steam);
          moveMixture(steam);
        }

        if(fire.style.top == air.style.top || fire.style.left == air.style.left){
          let smoke = document.createElement("DIV");
          smoke.innerText="smoke";
          smoke.className="combinedElement";
          container.appendChild(smoke);
          moveMixture(smoke);
          if(smoke==true){
            container.removeChild(smoke);
          }
        }
        if(water.style.top === earth.style.top || earth.style.left == water.style.left){
          let mud = document.createElement("DIV");
          mud.innerText="mud";
          mud.className="combinedElement";
          container.appendChild(mud);
          moveMixture(mud);
        }
        if(mud.style.top == fire.style.top || mud.style.left == fire.style.left ||  fire.style.left == mud.style.left){
          let brick = document.getElementById("brick");
          brick.style.opacity = 100;
          container.appendChild(brick);
          container.style.position ="absolute";
        }
        if(fire.style.top == earth.style.top || fire.style.left == earth.style.left ){
          let lava = document.getElementById("lava");
          lava.style.opacity = 100;
          container.appendChild(lava);
          container.style.position ="absolute";
        }*/
      }
    })
  })

    document.onmouseup = function(e){
      chooseElement=null;
    }
}

  //add dragging to combined elements
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

