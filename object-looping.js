// array vs object

var shoppingItems = ["books", "sunglasses", "shoes", "pen"];
var friendAge = [12, 45, 78, 12, 32, 14];

var friendAge = {
  rahim: 12,
  samad: 34,
  karim: 78,
  jamal: 12,
  robi: 32,
  kazi: 14,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

for (i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
  const values = shoppingCart[propertyName];
  console.log(propertyName, values);
}
