import data from '../fixtures/data.json';

import selectors from '../fixtures/selectors.json';

describe('Sign up page tests', () => {
  beforeEach(() => {
    cy.visit('https://rotogrinders.com/sign-up');
  });

  it('Successful sign up using Username with lowercase letters and numbers', () => {
    cy.get(selectors.selectors.usernameField).type('username111123344ww1');

    cy.get('div.form-body div:nth-child(2) input').type(
      'test111123433313ww@mnsaf.com'
    );

    cy.get('input#password').type('password123');

    cy.get('input.button.cta').click();

    cy.get('article.post h1').should(
      'have.text',
      'Welcome to RotoGrinders! Thanks for signing up!'
    );
  });
});
