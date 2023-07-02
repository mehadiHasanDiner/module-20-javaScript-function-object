function odd_even(oddOrEven) {
  //   var evaluatingNumber = 0;
  if (oddOrEven / 2 == 0) {
    console.log("it is an even number");
  } else {
    console.log("it is an odd number");
  }
  return oddOrEven;
}

var evenOrOdd = odd_even(10);
console.log(evenOrOdd);
