const { authorWith3DotsOnName } = require('../src/index');

describe('6 - Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro', () => {
  it('Verifica se `authorWith3DotsOnName` é uma função', () => {
    expect(typeof authorWith3DotsOnName).toBe('function');
  });

  it('Verifica se o resultado é o livro cuja pessoa autora começa com três iniciais', () => {
    expect(authorWith3DotsOnName()).toBe('O Senhor dos Anéis');
  });
});