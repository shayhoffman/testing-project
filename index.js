let acaDash = require("kkannen-dash");

let map = acaDash.map;

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

function addHello(name){
 return "Hello " + name;
}

let helloArray = map(names,addHello);
console.log(helloArray[0] === "Hello Jon");
  console.log(helloArray[1] === "Hello Bob");
  console.log(helloArray[2] === "Hello Ted");
  console.log(helloArray[3] === "Hello Barney");
  console.log(helloArray[4] === "Hello Lilly");
  console.log(helloArray[5] === "Hello Robin");
  console.log(helloArray[6] === "Hello Saul");
  console.log(helloArray[7] === "Hello Axe");
