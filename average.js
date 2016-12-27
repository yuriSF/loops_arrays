function average(numbers) {

  function sum(numbers) {
    var n=0;
    for (i=0; i<numbers.length; i++) {
      n=n+numbers[i];
    }
    return n
  }

  avr = sum(numbers) / numbers.length;
  return avr
}

list = [1,2,3,4,5,6,7,8,9,10]
console.log(average(list))
