describe('Formulário Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Não deve permitir o cadastro de usuários com email e senha inválido', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('moni@alura.com');
    cy.getByData('senha-input').type('987654');
    cy.getByData('botao-enviar').click();
  });
});
