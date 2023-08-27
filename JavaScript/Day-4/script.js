// Update your book purchasing function to have parameter amount of stock & amount of
// purchased book. Then calculate total price & display the result.
// Note:
// The function must have at least:
// - for loop iteration
// - break when amount of book is already out of stock
// - Display text if amount of book after purchasing can be purchased again or not

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateDiscount(pricePerBook, discountPercentage) {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Invalid discount percentage");
  }
  return pricePerBook * (discountPercentage / 100);
}

function calculateTax(pricePerBook, taxPercentage) {
  if (taxPercentage < 0) {
    throw new Error("Invalid tax percentage");
  }
  return pricePerBook * (taxPercentage / 100);
}

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: 14,
};

function purchaseBook(
  book,
  discountPercentage,
  taxPercentage,
  stock,
  amountToPurchase
) {
  const pricePerBook = book.price;
  let totalAmount = 0;

  const discountAmount = calculateDiscount(pricePerBook, discountPercentage);
  const priceAfterDiscount = pricePerBook - discountAmount;
  const taxAmount = calculateTax(priceAfterDiscount, taxPercentage);
  const priceAfterTax = priceAfterDiscount + taxAmount;

  const ispriceCheap = priceAfterTax < 10;

  console.log(`Judul: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Price: $ ${pricePerBook}`);
  console.log(`Discount Amount: $ ${discountAmount}`);
  console.log(`Price After Disc: $ ${priceAfterDiscount}`);
  console.log(`Tax Amount: $ ${taxAmount}`);
  console.log("Price After Tax: $" + priceAfterTax);
  console.log(`Is it cheap?: ${ispriceCheap}`);

  console.log(`\n ========= TASK TODAY ========= \n`);

  for (let i = 0; i < amountToPurchase; i++) {
    if (stock <= 0) {
      console.log("Out of stock. Cannot purchase more.");
      break;
    }

    if (stock >= amountToPurchase) {
      console.log(`You purchased book ${i + 1}: ${book.title}`);
      console.log(`Price: $${priceAfterTax.toFixed(2)}`);
      totalAmount += priceAfterTax;
      stock--;
    } else {
      console.log(`Book ${book.title} stock is insufficient to meet demand.`);
      break;
    }
  }

  console.log(`Total Price for Purchased Books: $${totalAmount.toFixed(2)}`);

  // Ask the user how many more books they want to purchase
  rl.question(
    "How many more books would you like to purchase (0 to exit): ",
    (additionalPurchase) => {
      const additionalAmount = parseInt(additionalPurchase);

      if (isNaN(additionalAmount) || additionalAmount < 0) {
        console.log("Invalid input. Please enter a non-negative number.");
        rl.close();
        return;
      }

      if (additionalAmount === 0) {
        console.log(`Remaining Stock: ${stock}`);
        rl.close();
        return;
      }

      if (additionalAmount > stock) {
        console.log("Not enough stock available for your request.");
        rl.close();
        return;
      }
      purchaseBook(
        book,
        discountPercentage,
        taxPercentage,
        stock,
        additionalAmount
      );
    }
  );
}

try {
  purchaseBook(book, 30, 11, 0, 1);
} catch (error) {
  console.error(error.message);
}
