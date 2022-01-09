describe('Perform login action - Negative', () => {
  it('Visit login page', () => {
    cy.visit('/');
  });

  it('Invalid login details and validation check', () => {
    cy.fixture('login').then((loginFixtures) => {
      const {
        locators,
        users: { invalid },
      } = loginFixtures;

      cy.get(locators.email).type(invalid.invalidEmail);
      cy.get('form').contains('Login').click();
      cy.get('form').contains('Please enter a valid email address');
      cy.get('form').contains('Please enter a valid password');

      cy.get(locators.email).clear().type(invalid.email);
      cy.get(locators.password).type(invalid.password);
      cy.get('form').contains('Login').click();
    });
  });

  it('Check for error message', () => {
    cy.get('.ant-message-custom-content').should('be.visible');
  });
});

describe('Perform login action - Positive', () => {
  it('Enter valid login details', () => {
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

  it('Dashboard - check welcome message', () => {
    cy.get('.container-dashboard').contains(
      `Welcome back to the Phrasee dashboard, here's how Phrasee is doing so far.`
    );
    cy.get('body').contains(`Login successful`);
  });
});
