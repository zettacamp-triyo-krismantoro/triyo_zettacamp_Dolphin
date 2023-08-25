// main function
function purchasingBook(bookShelf, amountPurchasedBook, amountStock) {
  let bookCounter = 0;
  let duplicateStock = amountStock;
  const canBePurchased = amountStock != 0 ? true : false;

  // purchasing book operation
  function purchasedBook(amountPurchasedBook) {
    if (amountStock == 0) {
      console.log("This book ")
    } else {
      for (let i = 0; i < amountPurchasedBook; i++) {
        if (amountStock > i) {
          console.log(`${i + 1}. title: ${bookShelf[0].title}, author: ${bookShelf[0].author}`);
          duplicateStock--;
          console.log(`Remaining stock: ${duplicateStock}`)
          bookCounter++;
        } else {
          console.log("[OUT OF STOCK]");
          break;
        }
      }
    }
  }

  // calculate total price
  const totalPrice = () => bookShelf[0].price * bookCounter;

  // // discount operation
  // const isDiscounted = discountInPercent > 0 ? true : false;

  // const priceAfterDiscounted = discountInPercent > 0 ? Math.round((subTotalPrice()) - ((subTotalPrice()) * (discountInPercent / 100))) : (subTotalPrice());


  // DISPLAY
  // border top
  console.log("=".repeat(70));

  // bookshelf
  console.log("Bookshelf:");
  for (let i of bookShelf) {
    console.log(i);
  }

  // purchased book
  if (canBePurchased) {
    console.log("\nPurchased Book:");
    console.log(`Buy ${amountPurchasedBook} book`)
    purchasedBook(amountPurchasedBook);
  } else {
    console.log("\nThis book is unavailable");
  }

  // subtotal price
  console.log("\nTotal Price:");
  console.log(`Rp ${totalPrice()}`);

  // // if any discount
  // if (isDiscounted) {
  //   console.log(`Price after discounted: Rp ` + priceAfterDiscounted);
  // }

  // border bottom
  console.log("=".repeat(70));
}


// book shelf array
const bookShelf = [];

// adding book item to book shelf
(() => {
  bookShelf.push(
    {
      title: "Pulang",
      author: "Tere Liye",
      price: 50000,
    }
  )
})();

purchasingBook(bookShelf, amountPurchasedBook = 2, amountStock = 0);
