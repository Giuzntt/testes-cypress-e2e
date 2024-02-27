describe('Tela de Inicio', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Verificando título', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
