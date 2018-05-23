//read the color picker input values and change the linear gradient accordingly.
//we will be using DOM

//read the h3 and both color inputs
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomColor = document.querySelector(".randomColor");
var body = document.getElementById("gradient");


//colorpicker function
function setGradient(){
    body.style.background = "linear-gradient(to right,"+ color1.value+ ","+ color2.value+ ")";
    //display the gradient color palete by adding a text content
    css.textContent = body.style.background + "; ";
}//end func


//random color picker
function getRandomGradient(){
    color1.value = '#' + (Math.random().toString(16) + "000000").substring(2,8); 
    color2.value = '#' + (Math.random().toString(16) + "000000").substring(2,8); 
    setGradient();
}//end func


//display the gardients on window load
window.onload = setGradient();

//listen for an event where the color1 input is changed
color1.addEventListener("input", setGradient);

//listen for an event where the color2 input is changed
color2.addEventListener("input", setGradient);

//set the random color selector button
randomColor.addEventListener("click", getRandomGradient);
