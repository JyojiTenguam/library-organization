const { oldBooks } = require('../src/index');

describe('5 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação', () => {
  it('Verifica se `oldBooks` é uma função', () => {
    expect(typeof oldBooks).toBe('function');
  });

  it('Verifica se o array retornado possui apenas nomes de livros publicados há mais de 60 anos', () => {
    expect(oldBooks(2022)).toEqual([
        'O Senhor dos Anéis',
        'Fundação',
        'O Chamado de Cthulhu',
      ]);
    });
});