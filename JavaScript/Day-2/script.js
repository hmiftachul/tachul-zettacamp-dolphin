// 1. Form variable JavaScript day 1
//      a. Use comparison operator with 2 variables from task number 1, display true if the name of books have same name otherwise display false
// 2. Create new 2 variables to contain price of your favourite books
//      a. Compare the variables which one have the highest price
//      b. Find the average price from those 2 variables using arithmetic operator
//      c. Create new variable to use ternary operator to determine the value of variable, if the average price more than 500000 set value with string “Expensive” if less or equal set “Cheap”
console.log(`\n`)

let favoriteBook1 = "Habbits";
const favoriteBook2 = "Nasehat Diri";

if (favoriteBook1 == favoriteBook2) {
    console.log(true)
} else {
    console.log(false)
}

favoriteBook1 = "Nasehat Diri"
let ternaryBook = favoriteBook1 == favoriteBook2 ? true : false;
console.log(ternaryBook)

console.log('\n ========= NEXT TASK ========= \n')

let priceBook1 = 25000;
let priceBook2 = 50000;


if (priceBook1 > priceBook2) {
    console.log(`Price Book 1 has the highest price:  ${priceBook1}`);
  } else if (priceBook1 < priceBook2){
    console.log(`Price Book 2 has the highest price:  ${priceBook2}`)
  } else {
    console.log(`equal ${priceBook1}`)
  }

  // console.log(priceBook1 > priceBook2 ? `${priceBook1}` : priceBook1 < priceBook2 ? '${priceBook2}` : `${priceBook1}`)

let highestPrice = Math.max(priceBook1, priceBook2);

console.log(`The highest price is: ${highestPrice}`);

let avgPrice = (priceBook1 + priceBook2) / 2
console.log(avgPrice)

let prices = [priceBook1, priceBook2];
let avaragePrice = prices.reduce((acc, val) => acc + val, 1) / prices.length;
console.log(avaragePrice);

let priceCategory = avgPrice > 500000 ? "Expensive" : "Cheap";
console.log("Price category: " + priceCategory);

console.log(`\n ========= LOGIC TEST ========= \n`)

/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */
// function max_of_two(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
//   }

function max_of_two(a, b) {
    return a > b ? a : b;
  }

  console.log(max_of_two(10, 5));
  console.log(max_of_two(45, 66));

