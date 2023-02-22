//This function clear all values
function clearScreen(){
document.getElementById("screen").value="";
}
//This function display values
function display(value){
document.getElementById("screen").value+=value;
}
//This function evaluates the expression and returns the result
function calculate(){
var p=document.getElementById("screen").value;
var q=eval(p);
document.getElementById("screen").value=q;
}
function sine(value){
var t=document.getElementById("screen").value;
var u= Math.sin(t).toFixed(4);
document.getElementById("screen").value=u;
}
function cosine(value){
var t=document.getElementById("screen").value;
var u=Math.cos(t).toFixed(4);
document.getElementById("screen").value=u;
}

function tang(value){
var t=document.getElementById("screen").value;
var u=Math.tan(t).toFixed(4);
document.getElementById("screen").value=u;
}

function logg(value){
var t=document.getElementById("screen").value;
var u=Math.log(t).toFixed(4);
document.getElementById("screen").value=u;
}

function sqrt(value){
var t=document.getElementById("screen").value;
var u=Math.sqrt(t).toFixed(4);
document.getElementById("screen").value=u;
}

function percent()
{
var t=document.getElementById("screen").value;
var u=(t/100).toFixed(4);
document.getElementById("screen").value=u;
}

function Exponent()
{
var t=document.getElementById("screen").value;
var u=Math.exp(t).toFixed(4);
document.getElementById("screen").value=u;
}

function Pie()
{
var t= document.getElementById("screen").value;
var u=(Math.PI*t).toFixed(4);
document.getElementById("screen").value=u;
}

function power()
{
var base= document.getElementById("screen").value;
//var exponent=document.getElementById("screen").value;
var u=Math.pow(base,2);
document.getElementById("screen").value=u;
}

function Ce()
{
var display=document.getElementById("screen");
display.value=display.value.substring(0,display.value.length-1);
}