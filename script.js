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
