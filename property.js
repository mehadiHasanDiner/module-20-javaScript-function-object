var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// property এর value পাওয়া ৩টা সিস্টেম

// 1. যখন আমি জানি যে অবজেক্টে pen নামে একটা প্রোপাটি বা কি আছে তখন আমি dot (.) নোটেশন ইউজ করছি

var penCount = shoppingCart.pen;

// alternative system
// 2.  যখন আমি জানি যে অবজেক্টে pen নামে একটা প্রোপাটি বা কি আছে তখন আমি dot (.) নোটেশন ইউজ করছি
var penCount2 = shoppingCart["pen"];

//  3.
var propertyName = "books";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// অবজেক্টের প্রোপার্টিগুলোকে একবারে পেতে চাইলে এভাবে করতে হবে।
var properties = Object.keys(shoppingCart);

// অবজেক্টের প্রোপাটির value একবারে পেতে চাইলে এভাবে করতে হবে।
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart["mouse"] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 89;
console.log(shoppingCart);
