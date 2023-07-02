// // practice problem 1

// function foo() {
//   console.log("foo");
//   bar();
// }

// function bar() {
//   console.log("bar");
// }

// foo();

// // practice problem 2
// function make_avg(a, b, c, d) {
//   var average = (a + b + c) / 3;
//   return average;
// }

// var markSubject1 = 59;
// var markSubject2 = 69;
// var markSubject3 = 85;

// var totalAverage = make_avg(markSubject1, markSubject2, markSubject3);

// // var totalAverage = make_avg(89, 75, 68);

// console.log(totalAverage);

// practice problem 3

function make_avg(arrayAvg) {
  var numbers = 0;
  for (var i = 0; i < arrayAvg.length; i++) {
    numbers += arrayAvg[i];
    var totalAverage = numbers / 5;
  }
  return totalAverage;
}

var numberForAvg = [40, 50, 40, 50, 20];

var averageMark = make_avg(numberForAvg);
console.log(averageMark);
