

var chooseElement;
var chooseMixture;

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


        waterMix();
        earthMix();
        
        /*
        
        }/* if(fire.style.top === air.style.top || fire.style.left === air.style.left){
          let smoke = document.getElementById("smoke");
          smoke.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(smoke);
          contain.style.position ="absolute";
        } if(mud.style.top === fire.style.top || mud.style.left === fire.style.left){
          let brick = document.getElementById("brick");
          brick.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(brick);
          contain.style.position ="absolute";
        } else{
        console.log("nothing");
      }*/
        
      }
    })
  })

    document.onmouseup = function(e){
      chooseElement=null;
    }
}

const moveMixture = function(mixture){
  const mixtures = document.querySelectorAll(".mixture");
 
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



  function exit(){
    alert.style.display ="none";
  }

  function waterMix(){
    //create steam when water and fire are combined
    if(fire.style.top === water.style.top || fire.style.left === water.style.left){
      let steam = document.getElementById("steam");
      steam.style.display = "flex";
      let contain = document.getElementById("container");
      contain.appendChild(steam);
      contain.style.position ="absolute";
    }
    if(fire.style.top === earth.style.top || fire.style.left === earth.style.left ){
      let lava = document.getElementById("lava");
      lava.style.display = "flex";
      let contain = document.getElementById("container");
      contain.appendChild(lava);
      contain.style.position ="absolute";
    }
  }

  function earthMix(){
    if(fire.style.top === air.style.top || fire.style.left === air.style.left){
        let smoke = document.getElementById("smoke");
        smoke.style.display = "flex";
        let contain = document.getElementById("container");
        contain.appendChild(smoke);
        contain.style.position ="absolute";
      } 
      
    if(mud.style.top === fire.style.top || mud.style.left === fire.style.left){
        let brick = document.getElementById("brick");
        brick.style.display = "flex";
        let contain = document.getElementById("container");
        contain.appendChild(brick);
        contain.style.position ="absolute";
      }
    }
  
  
  
