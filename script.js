const books = [
  { title: "The Great Gatsby", genre: "tragedy", rating: 3, dnf: true },
  { title: "Wuthering Heights", genre: "gothic", rating: 4, dnf: false },
  { title: "Frankenstein", genre: "gothic", rating: 5, dnf: true },
  { title: "The Turn of the Screw", genre: "gothic", rating: 3.75, dnf: false }
];

const keptBooks = [];

for (const book of books) {
  if (book.dnf === false && book.rating >= 4) {
    keptBooks.push(book);
  }
}

console.log(keptBooks);
