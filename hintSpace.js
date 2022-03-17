let hintButton = document.querySelector("#cheatSheetButton");
hintButton.addEventListener("click", function(){
  let hintPage = document.getElementById("hintPage");
  hintPage.style.display = "flex";
 
});

let exitHintButton = document.querySelector("#exitHintButton");
exitHintButton.addEventListener("click", function(){
  let hintPage = document.getElementById("hintPage");
  hintPage.style.display = "none";
});

let rulesButton = document.querySelector("#rulesButton");
rulesButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "flex";
});

let exitRulesButton = document.querySelector("#exitRulesButton");
exitRulesButton.addEventListener("click", function(){
  let rulesPage = document.getElementById("rulesPage");
  rulesPage.style.display = "none";
});

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function(){
  location.reload();
});

let darkModeButton = document.querySelector("#dark");
darkModeButton.addEventListener("click", function(){
  /*resetButton.style.backgroundColor = "";
  rulesButton.style.backgroundColor = "";
  cheatSheetButton.style.backgroundColor = "";
  elementSpace.style.backgroundColor = "";
  
  rulesButton.style.color = "";
  cheatSheetButton.style.color = "";
  resetButton.style.color = "";

  rulesButton.style.backgroundColor = "";
  darkModeButton.style.backgroundColor = "";
  lightModeButton.style.backgroundColor = "";
  hintSpace.style.backgroundColor = "";

  resetButton.style.border = "";
  rulesButton.style.border = "";
  cheatSheetButton.style.border = "";

  resetButton.style.boxShadow = "";
  rulesButton.style.boxShadow = "";
  cheatSheetButton.style.boxShadow = "";

  lightModeButton.style.borderBottomLeftRadius = "";
  lightModeButton.style.borderTopLeftRadius = "";
  lightModeButton.style.border = "";

  darkModeButton.style.border = "";*/
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
  
  darkModeButton.style.backgroundColor = "";
  darkModeButton.style.border = "";
  darkModeButton.style.borderRadius = "";
  darkModeButton.style.width = "";
  darkModeButton.style.width = "";
  
  hintSpace.style.backgroundColor = "";
  elementSpace.style.backgroundColor = "";

  modeButtonContainer.style.border = "";
});

let lightModeButton = document.querySelector("#light");
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
  
  darkModeButton.style.backgroundColor = "#a7f020";
  darkModeButton.style.border = "#191a18af 2px solid";
  darkModeButton.style.borderRadius = "100%";
  darkModeButton.style.width = "35%";
  darkModeButton.style.width = "35%";
  
  hintSpace.style.backgroundColor = "#191a18af";
  elementSpace.style.backgroundColor = "#191a18af";

  modeButtonContainer.style.border = "black solid 2px";
});

