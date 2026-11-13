const books = [
  { title: "The Great Gatsby", genre: "tragedy", rating: 3, dnf: true },
  { title: "Wuthering Heights", genre: "gothic", rating: 4, dnf: false },
  { title: "Frankenstein", genre: "gothic", rating: 5, dnf: true },
  { title: "The Turn of the Screw", genre: "gothic", rating: 3.75, dnf: false },
  { title: "The Hunger Games", genre: "young adult", rating: 5, dnf: false },
  { title: "The Giver", genre: "young adult", rating: 2, dnf: false },
  { title: "Pride and Prejudice", genre: "romance", rating: 5, dnf: false },
  { title: "Jane Eyre", genre: "gothic", rating: 4.5, dnf: false },
  { title: "Dracula", genre: "gothic", rating: 4, dnf: false },
  { title: "Little Women", genre: "literary", rating: 4.5, dnf: false },
  { title: "To Kill a Mockingbird", genre: "literary", rating: 5, dnf: false },
  { title: "The Picture of Dorian Gray", genre: "gothic", rating: 4.5, dnf: false },
  { title: "The Fault in Our Stars", genre: "young adult", rating: 4, dnf: false },
  { title: "The Hobbit", genre: "fantasy", rating: 5, dnf: false },
  { title: "The Fellowship of the Ring", genre: "fantasy", rating: 4, dnf: true },
  { title: "The Book Thief", genre: "young adult", rating: 4, dnf: false },
  { title: "The Perks of Being a Wallflower", genre: "young adult", rating: 4.5, dnf: false },
  { title: "The Shining", genre: "horror", rating: 2, dnf: true },
  { title: "The Bell Jar", genre: "literary", rating: 4, dnf: false },
  { title: "The Odyssey", genre: "epic", rating: 3, dnf: false },
  { title: "A Wrinkle in Time", genre: "scifi", rating: 3.5, dnf: false },
  { title: "The Silent Patient", genre: "thriller", rating: 4, dnf: false },
  { title: "The Housemaid", genre: "thriller", rating: 2, dnf: true },
  { title: "The Ballad of Songbirds and Snakes", genre: "young adult", rating: 5, dnf: false }
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

document.getElementById("topGenre").textContent = topGenre;
document.getElementById("topGenreCount").textContent = `${topGenreCount} books`;
document.getElementById("secondGenre").textContent = secondGenre;
document.getElementById("secondGenreCount").textContent = `${secondGenreCount} books`;

for (const book of keptBooks) {
  if (book.genre === topGenre && book.rating === 5) {
    const item = document.createElement("li");
    item.textContent = `${book.title}`;
    topReport.append(item);
  }
}

let secondFiveStarCount = 0;

for (const book of keptBooks) {
  if (book.genre === secondGenre && book.rating === 5) {
    const item = document.createElement("li");
    item.textContent = `${book.title}`;
    secondReport.append(item);
    secondFiveStarCount = secondFiveStarCount + 1;
  }
  
  if (secondFiveStarCount === 0) {
    secondReport.textContent = `No 5 star reads to display.`;
  }
}
