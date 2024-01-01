const books = [
  {
    title: "The Road",
    author: "Agata Cristie",
    genre: "Business",
    pages: 310,
    price: 30,
  },
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    genre: "Programming",
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

// console.log(doesAuthorExist("Vidoe Podgorec", books));

function displayBookInfo(book) {
  return `Title: ${book.title}, author: ${book.author} ... `;
}

// ... 1.spread and 2.rest
function sortBooksByPages(books) {
  // 1. Clone original array (without ES6 and with ES6)
  const clonedBooks = [...books];
  // 2. Sort cloned instance.

  // 3. return sorted cloned instance.
}

function findLongestBookPerGenre(books, genre) {
  return books
    .filter((book) => {
      return book.genre == genre;
    })
    .reduce((acc, book) => {
      if (acc.pages > book.pages) {
        return acc;
      } else {
        return book;
      }
    }, books[0]).title;
}

console.log(JSON.stringify(findLongestBookPerGenre(books, "Programming")));
