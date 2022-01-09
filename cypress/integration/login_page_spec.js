describe('Perform login action - Negative', () => {
  it('Visit login page', () => {
    cy.visit('/');
  });

  it('Validation check', () => {
    cy.fixture('login').then((loginFixtures) => {
      const {
        fields,
        users: {
          invalid: { invalidEmail },
        },
      } = loginFixtures;

      cy.get(fields.email).type(invalidEmail);
      cy.get('form').contains('Login').click();
      cy.get('form').contains('Please enter a valid email address');
      cy.get('form').contains('Please enter a valid password');
    });
  });

  it('Enter invalid login details', () => {
    cy.fixture('login').then((loginFixtures) => {
      const {
        fields,
        users: {
          invalid: { email, password },
        },
      } = loginFixtures;

      cy.get(fields.email).clear().type(email);
      cy.get(fields.password).type(password);
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

  it('Dashboard - check welcome message', () => {
    cy.get('.container-dashboard').contains(
      `Welcome back to the Phrasee dashboard, here's how Phrasee is doing so far.`
    );
    cy.get('body').contains(`Login successful`);
  });
});
