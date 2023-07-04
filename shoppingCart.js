// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

// Name export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
};

const totalPrice = 234;
const totalQuantity = 50;

export { totalPrice, totalQuantity as tq };

// default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart.`);
}
