function bringSingara(money) {
  console.log("taka disen: ", money);
  console.log("ai nen singara");
  console.log(money);
  //   প্যারামিটার money সব সময় ফাংশনের ভিতরই একসেসএবল। ফাংশনের বাইরে ব্যবহৃত হয় না, করলে ইরর আসে
}

// bringSingara(250);
// // console.log(money);

// var taka = 250;
// bringSingara(taka);

function add(num1, num2) {
  console.log("going to add:", num1, num2);
}

// add(123, 340);

function sum(a, b, c, d, e) {
  console.log("sum:", a, b, c, d, e);
  var sum = a + b + c + d + e;
  console.log(sum);
}

sum(10, 20, 30, 40, 50);
