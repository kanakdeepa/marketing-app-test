describe('Dashboard - Create new campaign', () => {
  it('Login and navigate to dashboard', () => {
    cy.visit('/');
    cy.fixture('login').then((loginFixtures) => {
      const {
        locators,
        users: {
          valid: { email, password },
        },
      } = loginFixtures;

      cy.get(locators.email).type(email);
      cy.get(locators.password).type(password);
      cy.get('form').contains('Login').click();
    });
  });

  it('Create new campaign', () => {
    cy.get('[data-cy="create-campaign-mi"]').click();
    cy.get('[data-cy="email"]').click();
  });
});
