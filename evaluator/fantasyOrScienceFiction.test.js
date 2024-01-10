const { fantasyOrScienceFiction } = require('../src/index');

describe('1 - Filtre todos os livros do gênero ficção científica ou fantasia', () => {
  it('Verifica se `fantasyOrScienceFiction` é uma função', () => {
    expect(typeof fantasyOrScienceFiction).toBe('function');
  });

  it('Verifica se os objetos retornados são livros do gênero ficção científica ou fantasia', () => {
    expect(fantasyOrScienceFiction()).toEqual([
      {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: { name: 'George R. R. Martin', birthYear: 1948 },
        releaseYear: 1991
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951
      },
      {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: { name: 'Frank Herbert', birthYear: 1920 },
        releaseYear: 1965
      }
    ]);
  });
});