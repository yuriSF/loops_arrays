function sortInPlace(numbers) {
  function iterate() {
   check = false;
    for (i = 0; i < numbers.length; i++)  {
     if (i+1 != numbers.length) {
       current = numbers[i];
       next = numbers[i+1];
       if (current > next) {
         check = true;
         numbers[i] = next;
         numbers[i+1] = current;
       };
     };
   }
   if (check == true) {return true}
   else {return false}
 }
  while (iterate() == true) {iterate}
  return numbers
}

function max(numbers) {
  numbers = sortInPlace(numbers)
  var max = numbers[numbers.length - 1]
  return max
}

function min(numbers) {
  numbers = sortInPlace(numbers)
  var min = numbers[0]
  return min
}

list = [-20013,-5,0.7878,22,28,98,115];
console.log(max(list));
console.log(min(list));
