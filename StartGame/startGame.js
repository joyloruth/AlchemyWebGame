

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
         
        

        
        //create steam when water and fire are combined
        if (fire.style.top === water.style.top || fire.style.left === water.style.left){
          let steam = document.getElementById("steam");
          steam.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(steam);
          contain.style.position ="absolute";
          let alert = document.createElement('div');
          
          alert.innerHTML = "steam found";
          
          alert.setAttribute('class', 'alertNote');
          contain.appendChild(alert);

        } else if (fire.style.top === earth.style.top || fire.style.left === earth.style.left ){
          let lava = document.getElementById("lava");
          lava.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(lava);
          contain.style.position ="absolute";
        } else if(earth.style.top === water.style.top || earth.style.left === water.style.left){
          let mud = document.getElementById("mud");
          mud.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(mud);
          contain.style.position ="absolute";
        } else if(fire.style.top === air.style.top || fire.style.left === air.style.left){
          let smoke = document.getElementById("smoke");
          smoke.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(smoke);
          contain.style.position ="absolute";
        } else if(mud.style.top === fire.style.top || mud.style.left === fire.style.left){
          let brick = document.getElementById("brick");
          brick.style.display = "flex";
          let contain = document.getElementById("container");
          contain.appendChild(brick);
          contain.style.position ="absolute";
        } else{
        console.log("nothing");
      }
        
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


  // let lava = document.createElement('div');
          // lava.setAttribute('class', 'element');
          // lava.style.backgroundColor = "red";
          // lava.style.width = 300;
          // lava.style.height = 300;
          // lava.innerHTML = "lava";
          // let contain = document.getElementById("container");
          
          // contain.appendChild(lava);
          // contain.style.position ="absolute";


 //  if(fire.left > water.left + water.width ||
 //     fire.left + fire.width < water.left  ||
 //     fire.top > water.top + water.height||
 //     fire.top + fire.height < water.top
 //     ){
 //       console.log("combined");
        //  }
      
        //  else{
        //    console.log("not combined" + " " + element);
      
        //  }
