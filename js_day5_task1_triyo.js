// main_function "purchasingBook"
function purchasingBook(bookObject, discountInPercent = 0, taxInPercent = 11, amountStock, amountPurchasedBook, amountOfMonths = 0) {
  // detail current date
  const currentDate = new Date();

  // purchasing book operation [variables]
  const resultPurchasedBook = purchasedBook(bookObject, amountStock, amountPurchasedBook);

  const priceAfterDiscounted = discountOperation(resultPurchasedBook[1], discountInPercent);
  const priceAfterTaxed = taxOperation(priceAfterDiscounted, taxInPercent);

  // due date for credit operation [variables]
  const dueDate = new Date();
  const arrayDueDateCredit = creditPurchased(dueDate, amountOfMonths)

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
  if (amountStock > 0) {
    console.log(`\nBuy ${amountPurchasedBook} book:`);
    for (i of resultPurchasedBook[0]) {
      console.log(i);
    }
    console.log(`\nRemaining stock: ${resultPurchasedBook[2]}`)
    if (resultPurchasedBook[2] == 0) {
      console.log("[This book can't be purchased again]")
    }
    console.log(`\nSubtotal price: ${resultPurchasedBook[1]}`);

    // discount operation
    const isDiscounted = discountInPercent > 0 ? true : false;
    if (isDiscounted) {
      console.log(`\nDiscount: ${discountInPercent}%`);
      console.log("Price after discounted: Rp " + priceAfterDiscounted);
    }

    // tax operation
    console.log("\nTotal price: Rp " + priceAfterTaxed + ` (tax ${taxInPercent}%)`)
  } else {
    console.log(resultPurchasedBook);
  }

  // credit operation
  if (amountOfMonths > 0 && amountStock > 0) {
    console.log(`\nTerm of credit: ${amountOfMonths} (in months)`)
    console.log("The due dates:")
    for (i of arrayDueDateCredit) {
      console.log(`${i}`)
    }
  }

  // border bottom
  console.log("=".repeat(50));
}

// side_function "discountOperation"
function discountOperation(bookPrice, discountInPercent) {
  return Math.round(bookPrice - (bookPrice * (discountInPercent / 100)));
}

// side_function "taxOperation"
function taxOperation(priceAfterDiscounted, taxInPercent) {
  return Math.round(priceAfterDiscounted + (priceAfterDiscounted * (taxInPercent / 100)));
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
function creditPurchased(dueDate, amountOfMonths) {
  let arrayDueDateCredit = new Array(amountOfMonths);
  arrayDueDateCredit.fill(dueDate);
  arrayDueDateCredit = arrayDueDateCredit.map(x => {
    x.setMonth(x.getMonth() + 1);
    x = `${x.getDate()}-${x.getMonth() + 1}-${x.getFullYear()}`;
    return x;
  });
  return arrayDueDateCredit;
}

// book object
const bookObj = {
  title: "You do you",
  author: "Fellexandro Ruby",
  price: 30000
}

purchasingBook(bookObj, discountInPercent = 20, taxInPercent = undefined, amountStock = 10, amountPurchasedBook = 3, amountOfMonths = 5);