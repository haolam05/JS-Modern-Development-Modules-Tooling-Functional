'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (state, limits, value, des, user = 'jonas') {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description: des, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, '🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses = (state, limits) =>
  state.map(bud =>
    bud.value < -getLimit(limits, bud.user) ? { ...bud, flag: 'limit' } : bud
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // Method #1
  // console.log(
  //   state
  //     .map(bud =>
  //       bud.value <= -bigLimit ? `${bud.description.slice(-2)} / ` : ''
  //     )
  //     .join('')
  //     .slice(0, -2)
  // );

  // Method #2
  // console.log(
  //   state
  //     .filter(bud => bud.value <= -bigLimit)
  //     .map(bud => `${bud.description.slice(-2)}`)
  //     .join(' / ')
  // );

  // Method #3
  console.log(
    state
      .filter(bud => bud.value <= -bigLimit)
      .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '')
      .slice(2)
  );
};
logBigExpenses(finalBudget, 500);
