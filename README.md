# es6Learning
#const ====> use within the block . when we want to remain same value within the block or we can say that we dont want to change the value.

<script>
  const pi = 3.14;
  let r=2;
  console.log(pi*r*r);
</script>

#let===> use within the block . Can not  be redeclare same block'
<script>
  var x = 10;
{
  let x = 2;
}
</script>

#Arrow Function===> no need the function keyword, the return keyword, and the curly brackets
const x = (x, y) => x * y;

#Spread Operator
#For/Of
const fruits = ["apple","banana","pear"];
for (let x of fruits) {
  
  console.log(x);
};
# Map Object===>It holds key-value pairs where the keys can be any datatype and it remember  remembers the original insertion order of # the key and it has property that represents the size of the map






