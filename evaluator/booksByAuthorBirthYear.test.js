const { booksByAuthorBirthYear } = require('../src/index');

describe('3 - Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras', () => {
  it('Verifica se `booksByAuthorBirthYear` é uma função', () => {
    expect(typeof booksByAuthorBirthYear).toBe('function');
  });

  it('Verifica se ao passar um ano como parâmetro os nomes retornados são de livros escritos por pessoas autoras nascidas naquele ano', () => {
    expect(booksByAuthorBirthYear(1920)).toEqual([ 'Fundação', 'Duna' ]);
    expect(booksByAuthorBirthYear(1948)).toEqual([ 'As Crônicas de Gelo e Fogo' ]);
  });
});