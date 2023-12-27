const books = [
  {
    title: "The Road Ahead",
    author: "Agata Cristie",
    genre: "Business",
    pages: 125,
    price: 30,
  },
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    genre: "Business",
    pages: 225,
    price: 30,
  },
];

function filterBooksByGenre(genre) {
  const newArray = books.filter((book) => {
    const isCorrectGenre = book.genre == genre;
    return isCorrectGenre;
  });

  return newArray;
}

// console.log(filterBooksByGenre("Business"));

// Pure function
function findAveragePages(books) {
  let totalPages = books.reduce((agg, book) => {
    return (agg = agg + book.pages);
  }, 0);

  return totalPages / books.length;
}

books.map((book) => {
  return book.pages;
});

// 2 + 4 + 9 + 16 = 31
// x = x + 1 -->

const findShortestBook = (books) => {
  const shortestBook = books.reduce((acc, book) => {
    if (acc.pages < book.pages) {
      return acc;
    } else {
      return book;
    }
  }, books[0]);

  return shortestBook;
};

// console.log(findShortestBook(books));

const doesAuthorExist = (author, books) => {
  // hint --> According to JavaScript empty array is true, but emptyArray.length e false;
  const authorExists = books.filter((book) => {
    return book.author == author;
  });

  return Boolean(authorExists.length);
};

console.log(doesAuthorExist("Vidoe Podgorec", books));
