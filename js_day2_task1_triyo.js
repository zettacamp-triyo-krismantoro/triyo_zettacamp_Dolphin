const bookShelf = {};

bookShelf.favoriteBookTitle1 = "Pulang by Tere Liye";
bookShelf.favoriteBookTitle2 = "Fisika Modern";
bookShelf.leastBookTitle = "Fisika Modern";

console.log(bookShelf);

// between bookShelf.favoriteBookTitle1 and bookShelf.leastBookTitle
console.log("\nBetween bookShelf.favoriteBookTitle1 and bookShelf.leastBookTitle");
console.log(bookShelf.favoriteBookTitle1 == bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle1 === bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle1 != bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle1 !== bookShelf.leastBookTitle);

// between bookShelf.favoriteBookTitle2 and bookShelf.leastBookTitle
console.log("\nBetween bookShelf.favoriteBookTitle2 and bookShelf.leastBookTitle");
console.log(bookShelf.favoriteBookTitle2 == bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle2 === bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle2 != bookShelf.leastBookTitle);
console.log(bookShelf.favoriteBookTitle2 !== bookShelf.leastBookTitle);