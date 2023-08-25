const favoriteBookShelf = [
  { title: "You do you", price: 60000 },
  { title: "Pulang", price: 70000 }
];

favoriteBookShelf[0].author = "Fellexandro Ruby";
favoriteBookShelf[1].author = "Tere Liye";

let highestPriceBook = favoriteBookShelf[0].price > favoriteBookShelf[1].price ? favoriteBookShelf[0] : favoriteBookShelf[1];

let averagePrice = (favoriteBookShelf[0].price + favoriteBookShelf[1].price) / 2;

let averagePriceCategory = averagePrice > 500000 ? "Expensive" : "Cheap";

console.log("Favorite Book List:");
console.log(favoriteBookShelf)

console.log("\nHighest Price Favorite Book:");
console.log(highestPriceBook.title);

console.log("\nAverage Price:");
console.log(averagePrice);

console.log("\nAverage Price Category:");
console.log(averagePriceCategory);
