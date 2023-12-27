const books = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
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
  let totalPages = books
    .map((book) => {
      return book.pages;
    })
    .reduce((agg, numOfPages) => {
      return (agg = agg + numOfPages);
    }, 0);

  return totalPages / books.length;
}

console.log(findAveragePages(books));
