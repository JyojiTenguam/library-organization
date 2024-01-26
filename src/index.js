const { books } = require('../data/library');

// Requisito 1
const fantasyOrScienceFiction = () => books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  .sort();

// Requisito 2
const oldBooksOrdered = (year) =>
  books
    .filter((book) => (new Date()
      .getFullYear() - book.releaseYear) > 60 && book.releaseYear <= year)
    .sort((a, b) => a.releaseYear - b.releaseYear);

// Requisito 3
const booksByAuthorBirthYear = (birthYear) => {
  const lastYear = new Date().getFullYear() - 1;

  return books
    .filter((book) => book.author.birthYear === birthYear && book.author.birthYear <= lastYear)
    .map((book) => book.name);
};

// Requisito 4
const fantasyOrScienceFictionAuthors = () => {
  // escreva seu código aqui
};

// Requisito 5
const oldBooks = (year) => {
  // escreva seu código aqui
};

// Requisito 6
const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
