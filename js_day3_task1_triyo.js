function purchasingBook(bookTitle, bookAuthor, bookPrice, discountInPercent = 0, taxInPercent = 11) {
  // discount operation
  const isDiscounted = discountInPercent > 0 ? true : false;

  const priceAfterDiscounted = discountInPercent > 0 ? Math.round(bookPrice - (bookPrice * (discountInPercent / 100))) : bookPrice;

  // poin accumulation operation
  const poinEarned = () => priceAfterDiscounted / 10000;

  // calling function tax operation
  const priceAfterTaxed = taxOperation(priceAfterDiscounted, taxInPercent)

  // function tax operation
  function taxOperation(priceAfterDiscounted, taxInPercent) {
    return Math.round(priceAfterDiscounted + (priceAfterDiscounted * (taxInPercent / 100)));
  }

  // DISPLAY
  console.log("=============================================");
  console.log("Item");
  console.log(`Title: ${bookTitle}`);
  console.log(`Author: ${bookAuthor}`);
  console.log(`Price: ${bookPrice}\n`);

  // amount of discount
  if (isDiscounted) {
    console.log(`Discount : ${discountInPercent}%\n`);
  }

  // price after discounted
  console.log(`Price : Rp ${bookPrice}`);
  if (isDiscounted) {
    console.log(`Price after discounted: Rp ${priceAfterDiscounted}`);
  }

  // poin
  console.log(`Poin Earned: ${parseInt(poinEarned())}\n`);

  // price after taxed
  console.log(`Total Price: Rp ${priceAfterTaxed} (tax ${taxInPercent}%)`);

  console.log("=============================================");
}

purchasingBook(bookTitle = "Pulang", bookAuthor = "Tere Liye", bookPrice = 50000, discountInPercent = 20, taxInPercent = 2.5);

// time complexity
// space complexity