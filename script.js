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

const genreCounts = [];

for (const keptBook of keptBooks) {
  let foundGenre = false;

  for (const genre of genreCounts) {
    if (genre.genre === keptBook.genre) {
      foundGenre = true;
      genre.count = genre.count + 1;
    }
  }
  
    if (foundGenre === false) {
      genreCounts.push({ genre: keptBook.genre, count: 1 });
    }
}

console.log(genreCounts);
