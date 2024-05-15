const redBox = document.getElementById("red");
const blueBox = document.getElementById("blue");
const greenBox = document.getElementById("green");
const yellowBox = document.getElementById("yellow");

const greet = document.getElementById("greet");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    greet.innerText = `Hello, ${input.value}`; 
})

redBox.addEventListener("click", () => {
    redBox.style.backgroundColor = "red";
})
greenBox.addEventListener("click", () => {
    greenBox.style.backgroundColor = "green";
})
blueBox.addEventListener("click", () => {
    blueBox.style.backgroundColor = "blue";
})
yellowBox.addEventListener("click", () => {
    yellowBox.style.backgroundColor = "yellow";
})