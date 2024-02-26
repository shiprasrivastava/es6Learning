// const
const pi = 3.14;
let r=2;
console.log(pi*r*r);

//var and let

var x = 10;
{
  let x = 2;
  console.log(x);
}
console.log(x);

//function
var y = 20;
const z = (x, y) => x * y;
console.log(z);

const fruits = ["apple","banana","pear"];
for (let fruit of fruits) {
  
  console.log(fruit);
};