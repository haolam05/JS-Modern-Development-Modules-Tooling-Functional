// Modules use strict mode by default
// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
// addToCart('pizza', 5);
// console.log(tp, tq);

console.log('Importing module');
// console.log(shippingCost); // can't have access to this variable because variables are scoped to module

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('pizza', 5);
console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js'; // should NOT mixed both type of export/import
add('apples', 24);
add('bread', 14);
add('breads', 432);
console.log(cart);
// => prove that import and export are live-connection, bc the first time cart export, it is an empty array
//      but, when printed to the console here, it has the values that we had added

// Top-level await
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log(
  'this will be executed AFTER the fetched data bc top-level await blocks the main thread of execution'
);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
// Not very clean
// getLastPost().then(last => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
console.log('==============================================================');

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 234;
  const totalQuantity = 50;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart. Shipping cost is $${shippingCost}`
    );
  };

  const ordeStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
ShoppingCart2.addToCart('apple', 4); // 4 apple added to cart. Shipping cost is $10
ShoppingCart2.addToCart('banana', 22); // 22 banana added to cart. Shipping cost is $10
ShoppingCart2.addToCart('orange', 14); // 14 orange added to cart. Shipping cost is $10
console.log(ShoppingCart2);
