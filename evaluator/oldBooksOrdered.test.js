const { oldBooksOrdered } = require('../src/index');

describe('2 - Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo', () => {
  it('Verifica se `oldBooksOrdered` é uma função', () => {
    expect(typeof oldBooksOrdered).toBe('function');
  });

  it('Verifica se os objetos retornados são os livros publicados há mais de 60 anos, ordenados pelo tempo de publicação', () => {
    expect(oldBooksOrdered(2022)).toEqual([
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ]);
  });
});