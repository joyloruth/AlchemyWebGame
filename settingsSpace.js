let cheatSheetButton = document.querySelector("#cheatSheetButton");
cheatSheetButton.addEventListener("click", function(){
  let cheatSheetPage = document.getElementById("cheatSheetPage");
  cheatSheetPage.style.display = "flex";
 
});

let cheatSheetExitButton = document.querySelector("#cheatSheetExitButton");
cheatSheetExitButton.addEventListener("click", function(){
  cheatSheetPage.style.display = "none";
});

let rulesButton = document.querySelector("#rulesButton");
rulesButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "flex";
});

let rulesExitButton = document.querySelector("#rulesExitButton");
rulesExitButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "none";
});

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function(){
  location.reload();
});

let primaryElements = document.querySelectorAll(".primaryElement");

let darkModeButton = document.querySelector("#darkMode");
darkModeButton.addEventListener("click", function(){

  resetButton.style.backgroundColor = "";
  resetButton.style.color = "";
  resetButton.style.border = "";
  resetButton.style.boxShadow = "";
  
  rulesButton.style.backgroundColor = "";
  rulesButton.style.color = "";
  rulesButton.style.border = "";
  rulesButton.style.boxShadow = "";

  cheatSheetButton.style.backgroundColor = "";
  cheatSheetButton.style.border = "";
  cheatSheetButton.style.color = "";
  cheatSheetButton.style.boxShadow = "";
  
  lightModeButton.style.backgroundColor = "";
  lightModeButton.style.border = "";
  lightModeButton.style.borderBottomLeftRadius = "";
  lightModeButton.style.borderTopLeftRadius = "";
  lightModeButton.style.boxShadow = "";

  darkModeButton.style.backgroundColor = "";
  darkModeButton.style.border = "";
  darkModeButton.style.borderRadius = "";
  darkModeButton.style.width = "";
  darkModeButton.style.width = "";
  darkModeButton.style.boxShadow = "";
 
  modeButtonContainer.style.border = "";
  modeButtonContainer.style.backgroundColor = "";
  modeButtonContainer.style.boxShadow = "";

  settingsSpace.style.backgroundColor = "";
  elementSpace.style.backgroundColor = "";

  primaryElements.forEach(ele =>{
    ele.style.backgroundColor="";
    ele.style.color="";
    ele.style.boxShadow = "";
  })
});

let lightModeButton = document.querySelector("#lightMode");
lightModeButton.addEventListener("click", function(){
  resetButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  resetButton.style.color = "white";
  resetButton.style.border = "black 2px solid";
  resetButton.style.boxShadow = "black 0px 5px 0px";
  
  rulesButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  rulesButton.style.color = "white";
  rulesButton.style.border = "black 2px solid";
  rulesButton.style.boxShadow = "black 0px 5px 0px";

  cheatSheetButton.style.backgroundColor = "rgba(0, 0, 0, 0.527)";
  cheatSheetButton.style.border = "black 2px solid";
  cheatSheetButton.style.color = "white";
  cheatSheetButton.style.boxShadow = "black 0px 5px 0px";
  
  lightModeButton.style.backgroundColor = "rgba(0, 0, 0, 0.068)";
  lightModeButton.style.border = "none";
  lightModeButton.style.borderBottomLeftRadius = "0%";
  lightModeButton.style.borderTopLeftRadius = "15%";
  lightModeButton.style.boxShadow = "none";
  
  darkModeButton.style.backgroundColor = "#a7f020";
  darkModeButton.style.border = "#191a18af 2px solid";
  darkModeButton.style.borderRadius = "100%";
  darkModeButton.style.width = "35%";
  darkModeButton.style.width = "35%";
  darkModeButton.style.boxShadow = "black 0px 3px 3px";
 
  modeButtonContainer.style.border = "darkgrey dotted 2px";
  modeButtonContainer.style.backgroundColor = "grey";
  modeButtonContainer.style.boxShadow = "black 0px 3px 3px";

  settingsSpace.style.backgroundColor = "#191a18af";
  elementSpace.style.backgroundColor = "#191a18af";

  
  primaryElements.forEach(ele =>{
    ele.style.backgroundColor="rgba(0, 0, 0, 0.327)";
    ele.style.color="white";
    ele.style.boxShadow = "black 0px 5px 0px";
  })


});

