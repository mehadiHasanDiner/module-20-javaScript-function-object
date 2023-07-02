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
