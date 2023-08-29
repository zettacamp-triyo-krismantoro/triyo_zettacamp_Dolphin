// main_function "purchasingBook"
function purchasingBook(bookObject, discountInPercent = 0, taxInPercent = 11, amountStock, amountPurchasedBook, amountMonthsCredit = 0) {
  // detail current date
  const currentDate = new Date();

  // purchasing book operation [variables]
  const resultPurchasedBook = purchasedBook(bookObject, amountStock, amountPurchasedBook);

  const priceAfterDiscounted = discountOperation(resultPurchasedBook[1], discountInPercent);
  const priceAfterTaxed = taxOperation(priceAfterDiscounted, taxInPercent);

  // due date for credit operation [variables]
  const dueDate = new Date();
  const arrayDueDateCredit = creditPurchased(priceAfterTaxed, dueDate, amountMonthsCredit)

  // [DISPLAY]
  // border top
  console.log("=".repeat(50));

  // current date
  console.log(`Date: ${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`)

  // book detail
  console.log("\nBook item:");
  console.log(`Title: ${bookObject.title}`);
  console.log(`Author: ${bookObject.author}`);
  console.log(`Price: ${bookObject.price}`);
  console.log(`Stock: ${amountStock}`);

  // purchasing book operation
  /* 
  resultPurchasedBook[0] = array purchased book
  resultPurchasedBook[1] = subtotal price
  resultPurchasedBook[2] = remaining stock
  */
  if (amountStock > 0) {
    console.log(`\nBuy ${amountPurchasedBook} book:`);
    for (i of resultPurchasedBook[0]) {
      console.log(i);
    }
    console.log(`\nRemaining stock: ${resultPurchasedBook[2]}`)
    console.log(`\nSubtotal price: ${resultPurchasedBook[1]}`);

    // discount operation
    const isDiscounted = discountInPercent > 0 ? true : false;
    if (isDiscounted) {
      console.log(`\nDiscount: ${discountInPercent}%`);
      console.log("Price after discounted: Rp " + (priceAfterDiscounted).toFixed(3));
    }

    // tax operation
    console.log("\nTotal price: Rp " + (priceAfterTaxed).toFixed(3) + ` (tax ${taxInPercent}%)`)
  } else {
    console.log(resultPurchasedBook);
  }

  // credit operation
  if (amountMonthsCredit > 0) {
    console.log(`\nTerm of credit: ${amountMonthsCredit} (in months)`)
    console.log("The due dates:")
    console.log(arrayDueDateCredit[0]);
    console.log(`\nTotal amount of credit: Rp ${(arrayDueDateCredit[1]).toFixed(3)}`);
  }

  // border bottom
  console.log("=".repeat(50));
}

// side_function "discountOperation"
function discountOperation(bookPrice, discountInPercent) {
  return bookPrice - (bookPrice * (discountInPercent / 100));
}

// side_function "taxOperation"
function taxOperation(priceAfterDiscounted, taxInPercent) {
  return priceAfterDiscounted + (priceAfterDiscounted * (taxInPercent / 100));
}

// side_function "purchasedBook"
function purchasedBook(bookObject, amountStock, amountPurchasedBook) {
  let remainingStock = amountStock;
  let resultRemainingStock;
  let bookCounter = 0;
  let subTotalPrice = 0;
  let arrayPurchasedBook = [];
  if (amountStock > 0) {
    for (let i = 0; i < amountPurchasedBook; i++) {
      if (amountStock > i) {
        arrayPurchasedBook.push(
          `Book ${i + 1} ${bookObject.title} by ${bookObject.author}`
        )
        remainingStock--;
        resultRemainingStock = remainingStock;
        bookCounter++;
      } else {
        arrayPurchasedBook.push("[OUT OF STOCK]");
        break;
      }
    }
    subTotalPrice = bookCounter * bookObject.price;

    return [arrayPurchasedBook, subTotalPrice, resultRemainingStock];
  } else {
    return "\n[This book is unavailable]";
  }
}

// side_function "creditPurchased"
function creditPurchased(priceAfterTaxed, dueDate, amountMonthsCredit) {
  let resultCreditPurchased = [];
  let arrayDueDateCredit = new Array(amountMonthsCredit);
  let amountPaymentEachMonths = new Array(amountMonthsCredit);
  let totalAmountCredit = 0;
  arrayDueDateCredit.fill(dueDate);
  amountPaymentEachMonths.fill(0);
  arrayDueDateCredit = arrayDueDateCredit.map(x => {
    x.setMonth(x.getMonth() + 1);
    x = `${x.getDate()}-${x.getMonth() + 1}-${x.getFullYear()}`;
    return x;
  });

  // TASK JAVASCRIPT DAY 6
  amountPaymentEachMonths = amountPaymentEachMonths.map(x => {
    x = parseFloat(priceAfterTaxed / amountMonthsCredit);
    return x;
  });

  resultCreditPurchased = arrayDueDateCredit.map((item, index) => ({ ['Month ' + (index + 1)]: [item, 'Rp ' + (amountPaymentEachMonths[index]).toFixed(3)] }));

  if (amountPaymentEachMonths.length != 0) {
    totalAmountCredit = amountPaymentEachMonths.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  return [resultCreditPurchased, totalAmountCredit];
}

// book object
const bookObj = {
  title: "You do you",
  author: "Fellexandro Ruby",
  price: 55780
}

purchasingBook(bookObj, discountInPercent = 43, taxInPercent = 2.5, amountStock = 5, amountPurchasedBook = 2, amountMonthsCredit = 5);