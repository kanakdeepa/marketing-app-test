describe('Dashboard - Create new campaign', () => {
  it('Login and navigate to dashboard', () => {
    cy.visit('/');
    cy.fixture('login').then((loginFixtures) => {
      const {
        fields,
        users: {
          valid: { email, password },
        },
      } = loginFixtures;

      cy.get(fields.email).type(email);
      cy.get(fields.password).type(password);
      cy.get('form').contains('Login').click();
    });
  });
});
