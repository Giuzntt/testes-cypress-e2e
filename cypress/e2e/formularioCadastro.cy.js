describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Não deve permitir o cadastro de usuários com email e senha inválido', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('giuemail');
    cy.getByData('email-input').type('moni@alura.com');
    cy.getByData('senha-input').type('987654');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de nome é obrigatório');
  });
});
