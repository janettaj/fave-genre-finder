const books = [
  { title: "The Great Gatsby", genre: "tragedy", rating: 3, dnf: true },
  { title: "Wuthering Heights", genre: "gothic", rating: 4, dnf: false },
  { title: "Frankenstein", genre: "gothic", rating: 5, dnf: true },
  { title: "The Turn of the Screw", genre: "gothic", rating: 3.75, dnf: false },
  { title: "The Hunger Games", genre: "young adult", rating: 5, dnf: false },
  { title: "The Giver", genre: "young adult", rating: 2, dnf: false }
];

const keptBooks = [];

for (const book of books) {
  if (book.dnf === false && book.rating >= 4) {
    keptBooks.push(book);
  }
}

console.log(keptBooks);

const genreCounts = [];

let topGenre = "";
let topGenreCount = 0;
let secondGenre = "";
let secondGenreCount = 0;

for (const keptBook of keptBooks) {
  let foundGenre = false;
  let currentGenre;

  for (const genre of genreCounts) {
    if (genre.genre === keptBook.genre) {
      foundGenre = true;
      genre.count = genre.count + 1;
      currentGenre = genre;
    }
  }

  if (foundGenre === false) {
    currentGenre = { genre: keptBook.genre, count: 1 };
    genreCounts.push(currentGenre);
  }

  if (currentGenre.count > topGenreCount) {
    secondGenreCount = topGenreCount;
    secondGenre = topGenre;

    topGenreCount = currentGenre.count;
    topGenre = currentGenre.genre;

  } else if (currentGenre.count > secondGenreCount) {
    secondGenreCount = currentGenre.count;
    secondGenre = currentGenre.genre;
  }
}

console.log(genreCounts);

console.log(topGenre, topGenreCount);
console.log(secondGenre, secondGenreCount);
