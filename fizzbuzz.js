console.log(fizzBuzz(16))

function fizzBuzz(countTo) {
  list = []
  for (i=1; i<countTo+1; i++) {
   if (i%3==0 && i%5==0) {list.push("fizzbuzz")}
   else if  (i%5==0) {list.push("buzz")}
   else if (i%3==0) {list.push("fizz")}
   else {list.push(i)}
  }
  return list
}
