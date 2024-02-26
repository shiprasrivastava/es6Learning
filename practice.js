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
const z = (x, y) => {return (x * y);}
console.log(z(5,3));

const fruits = ["apple","banana","pear"];
for (let fruit of fruits) {
  
  console.log(fruit);
};

//map
const transport = new Map([
    ["bus", 500],
    ["train", 300],
    ["flight", 200]
  ]);
  transport.delete("bus");
  console.log(transport.size);
  transport.clear();
  console.log(transport.size);


  //rest parameter

  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let restPara = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(restPara);
