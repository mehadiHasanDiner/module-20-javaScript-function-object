function add(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  return sum;
  console.log("I need more code");
  // ফাংশনের ভিতর return ডিক্লেয়ার করা হয়ে গেলে তারপার আর কোনো কোড একডিকিউট হয় না, return কিছুটা break মত কাজ করে
}

var total = add(80, 20);
// console.log("total", total);

// Full function with calculations
function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var myTaka = 250;
var singaras = bringSingara(myTaka);
// return quantity; এর পুরাটার মান আসবে bringSingara(myTaka); এর এখানে
console.log("Eating Singara:", singaras);
