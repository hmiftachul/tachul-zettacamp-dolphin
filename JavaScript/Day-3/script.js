// Try create a book purchasing function that has parameters detail of a book, percentage of the discount, percentage of tax. Then display all the parameters with additional data:
// Amount of discount
// Price after discount
// Amount of tax
// Price after tax

// Note:
// The function must have at least:
// Constant variable
// Boolean, number, string variable
// Assignment, addition, addition, subtraction, multiplication, division operator

function calculateDiscount(price, discountPercentage) {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Invalid discount percentage");
  }
  return price * (discountPercentage / 100);
}

function calculateTax(price, taxPercentage) {
  if (taxPercentage < 0) {
    throw new Error("Invalid tax percentage");
  }
  return price * (taxPercentage / 100);
}

function purchaseBook(book, discountPercentage, taxPercentage) {
  const price = book.price;
  const discountAmount = calculateDiscount(price, discountPercentage);
  const priceAfterDiscount = price - discountAmount;
  const taxAmount = (calculateTax(priceAfterDiscount, taxPercentage)).toFixed(2);
  const priceAfterTax = (parseFloat(priceAfterDiscount) + parseFloat(taxAmount)).toFixed(2);

  const ispriceCheap = priceAfterTax < 10;

  console.log(`Judul: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Price: $ ${price}`);
  console.log(`Discount Amount: $ ${discountAmount}`);
  console.log(`Price After Disc: $ ${priceAfterDiscount}`);
  console.log(`Tax Amount: $ ${taxAmount}`);
  console.log("Price After Tax: $" + priceAfterTax);
  console.log(`Is it cheap?: ${ispriceCheap}`);
}

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: 14,
};

try {
  purchaseBook(book, 30, 8);
} catch (error) {
  console.error(error.message);
}

// class constructor
