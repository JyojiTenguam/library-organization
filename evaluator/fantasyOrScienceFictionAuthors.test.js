const { fantasyOrScienceFictionAuthors } = require('../src/index');

describe('4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética', () => {
  it('Verifica se `fantasyOrScienceFictionAuthors` é uma função', () => {
    expect(typeof fantasyOrScienceFictionAuthors).toBe('function');
  });

  it('Verifica se o array retornado contém os nomes das pessoas autoras e se está ordenado alfabeticamente', () => {
    expect(fantasyOrScienceFictionAuthors()).toEqual([
        'Frank Herbert',
        'George R. R. Martin',
        'Isaac Asimov',
        'J. R. R. Tolkien',
      ]);
    });
});