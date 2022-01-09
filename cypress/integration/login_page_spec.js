describe('Perform login action - Negative', () => {
  it('Visit login page', () => {
    cy.visit('/');
  });

  it('Enter invalid login details', () => {
    cy.get('[data-cy="login-email"]').type('invalid@example.com');
    cy.get('[data-cy="login-password"]').type('invalid#');
    cy.get('form').contains('Login').click();
  });

  it('Check if an error message is shown', () => {
    cy.get('.ant-message-custom-content').should('be.visible');
  });
});
