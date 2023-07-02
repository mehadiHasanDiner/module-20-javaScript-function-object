// practice problem 2
function make_avg(a, b, c) {
  var average = (a + b + c) / 3;
  return average;
}

var markSubject1 = 59;
var markSubject2 = 69;
var markSubject3 = 85;

var totalAverage = make_avg(markSubject1, markSubject2, markSubject3);

// var totalAverage = make_avg(89, 75, 68);

console.log(totalAverage);
