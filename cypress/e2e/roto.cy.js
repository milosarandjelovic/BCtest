import data from '../fixtures/data.json';

import selectors from '../fixtures/selectors.json';

describe('Sign up page tests', () => {
  beforeEach(() => {
    cy.visit(selectors.webPagesURLs.signUp);
  });

  it('Checking if all elements are on the page', () => {
    cy.get(selectors.itemSelectors.logo).should('exist');

    cy.get(selectors.itemSelectors.purchaseStatusBar).should('exist');

    cy.get(selectors.itemSelectors.signUpTitle).should('exist');

    cy.get(selectors.itemSelectors.usernameLabel).should('exist');

    cy.get(selectors.inputSelectors.usernameField).should('exist');

    cy.get(selectors.itemSelectors.usernameVerificationInfo).should('exist');

    cy.get(selectors.itemSelectors.emailLabel).should('exist');

    cy.get(selectors.inputSelectors.emailField).should('exist');

    cy.get(selectors.itemSelectors.passwordLabel).should('exist');

    cy.get(selectors.inputSelectors.passwordField).should('exist');

    cy.get(selectors.inputSelectors.recaptchaCheckbox).should('exist');

    cy.get(selectors.itemSelectors.createButton).should('exist');

    cy.get(selectors.itemSelectors.privacyPolicyButton).should('exist');

    cy.get(selectors.itemSelectors.privacyPolicyText).should('exist');

    cy.get(selectors.itemSelectors.signInButton).should('exist');
  });

  it('Checking if cursor can be placed in input fields', () => {
    cy.get(selectors.inputSelectors.usernameField).click();

    cy.get(selectors.inputSelectors.usernameField).should('be.focused');

    cy.get(selectors.inputSelectors.emailField).click();

    cy.get(selectors.inputSelectors.emailField).should('be.focused');

    cy.get(selectors.inputSelectors.passwordField).click();

    cy.get(selectors.inputSelectors.passwordField).should('be.focused');

    cy.get(selectors.inputSelectors.recaptchaCheckbox).should(
      'not.have.attr',
      'aria-checked',
      'true'
    );
  });

  it('Successful sign up using Username with lowercase letters and numbers', () => {
    cy.get(selectors.inputSelectors.usernameField).type('username111123344ww1');

    cy.get(selectors.inputSelectors.emailField).type(
      'test111123433313ww@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.welcomePage.welcomeMessageElement).should(
      'have.text',
      selectors.welcomePage.welcomeMessageText
    );
  });

  it('Unsuccessful sign up using already used username', () => {
    cy.get(selectors.inputSelectors.usernameField).type('username111123344ww1');

    cy.get(selectors.inputSelectors.emailField).type(
      'test111123433313ww@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.usernameTaken
    );
  });

  it('Unsuccessful sign up using already used email', () => {
    cy.get(selectors.inputSelectors.usernameField).type('username1kk23k5');

    cy.get(selectors.inputSelectors.emailField).type(
      'test111123433313ww@mnsaf.com'
    );
    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.emailTaken
    );
  });

  it('Unsuccessful sign up with using already used username and password', () => {
    cy.get(selectors.inputSelectors.usernameField).type('username111123344ww1');

    cy.get(selectors.inputSelectors.emailField).type(
      'test111123433313ww@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    const combinedText =
      data.errorMessage.emailTaken + data.errorMessage.usernameTaken;

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      combinedText
    );
  });

  it('Successful sign up using Username with upercase letters and numbers', () => {
    cy.get(selectors.inputSelectors.usernameField).type('TEST123332WW');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1qrwes27qq521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.welcomePage.welcomeMessageElement).should(
      'have.text',
      selectors.welcomePage.welcomeMessageText
    );
  });

  it('Successful sign up using Username with upercase and lowercase letters', () => {
    cy.get(selectors.inputSelectors.usernameField).type('TESTtestQAAA');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1wffrwes27521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.welcomePage.welcomeMessageElement).should(
      'have.text',
      selectors.welcomePage.welcomeMessageText
    );
  });

  it('Unsuccessful sign up using Username with letters and special characters', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test_www!!@@');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1e12rwes27521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.usernameMustContainsLettersOrNumbers
    );
  });

  it('Unsuccessful sign up using Username with letters and spaces', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test www QADDss');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa11a13rwes27521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.usernameMustContainsLettersOrNumbers
    );
  });

  it('Unsuccessful sign up with Username empty', () => {
    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1s1224r222webbswff27521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.usernameRequired
    );
  });

  it('Unsuccessful sign up with Email empty', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1233wwwssqat');

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.emailRequired
    );
  });

  it('Unsuccessful sign up using Email without username', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1234wwwqa12');

    cy.get(selectors.inputSelectors.emailField).type('@mnsaf.com');

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.emailMustBeValid
    );
  });

  it('Unsuccessful sign up using Email without @', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1234wwwq22af');

    cy.get(selectors.inputSelectors.emailField).type('test1f123qabc.mnsaf.com');

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.emailMustBeValid
    );
  });

  it('Unsuccessful sign up using Email without domain', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1235wwwsqaz');

    cy.get(selectors.inputSelectors.emailField).type('test123qabcpp@');

    cy.get(selectors.inputSelectors.passwordField).type('password123');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.emailMustBeValid
    );
  });

  it('Unsuccessful sign up using Password with <6 characters', () => {
    cy.get(selectors.inputSelectors.usernameField).type('testww1236sswww1qx');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1t1www5rwewwwss27521@mnsaf.com'
    );

    cy.get(selectors.inputSelectors.passwordField).type('passw');

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.passwordMustBeSixOrMoreCharactersLong
    );
  });

  // !!!! Missing specification for password field verification so next cases can't be written and tested.

  //     it('Successful sign up using Password with only upercase letters', () => {

  //         cy.get(selectors.inputSelectors.usernameField).type('test1238www')

  //         cy.get(selectors.inputSelectors.emailField).type('fapa17rwes27521@mnsaf.com')

  //         cy.get(selectors.inputSelectors.passwordField).type('PASSWORD')

  //         cy.get(selectors.itemSelectors.createButton).click()

  // });

  //      it('Successful sign up using Password with only lowercase letters', () => {

  //         cy.get(selectors.inputSelectors.usernameField).type('test1237www')

  //         cy.get(selectors.inputSelectors.emailField).type('fapa16rwes27521@mnsaf.com')

  //         cy.get(selectors.inputSelectors.passwordField).type('password')

  //         cy.get(selectors.itemSelectors.createButton).click()

  // });

  //      it('Successful sign up using Password with numbers', () => {

  //         cy.get(selectors.inputSelectors.usernameField).type('test1238www')

  //         cy.get(selectors.inputSelectors.emailField).type('fapa17rwes27521@mnsaf.com')

  //         cy.get(selectors.inputSelectors.passwordField).type('1234567')

  //         cy.get(selectors.itemSelectors.createButton).click()

  // });

  //      it('Successful sign up using Password with only special characters', () => {

  //         cy.get(selectors.inputSelectors.usernameField).type('test1239www')

  //         cy.get(selectors.inputSelectors.emailField).type('fapa18rwes27521@mnsaf.com')

  //         cy.get(selectors.inputSelectors.passwordField).type('!!##%%&')

  //         cy.get(selectors.itemSelectors.createButton).click()

  // });

  //      it('Successful sign up using Password with only spaces', () => {

  //         cy.get(selectors.inputSelectors.usernameField).type('test1240www')

  //         cy.get(selectors.inputSelectors.emailField).type('fapa19rwes27521@mnsaf.com')

  //         cy.get(selectors.inputSelectors.passwordField).type('       ')

  //         cy.get(selectors.itemSelectors.createButton).click()

  // });

  it('Unsuccessful sign up with Password empty', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1241wwwqayy');

    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1u20rwes27521@mnsaf.com'
    );

    cy.get(selectors.itemSelectors.createButton).click();

    cy.get(selectors.itemSelectors.notification).contains(
      data.errorMessage.passwordRequired
    );
  });

  it('Unsuccessful sign up with Username and Email empty', () => {
    cy.get(selectors.inputSelectors.passwordField).type('password112');

    cy.get(selectors.itemSelectors.createButton).click();

    const combinedText =
      data.errorMessage.usernameRequired + data.errorMessage.emailRequired;

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.combinedText
    );
  });

  it('Unsuccessful sign up with Username and Password empty', () => {
    cy.get(selectors.inputSelectors.emailField).type(
      'fapa1o21rwes27521@mnsaf.com'
    );

    cy.get(selectors.itemSelectors.createButton).click();

    const combinedText =
      data.errorMessage.usernameRequired + data.errorMessage.passwordRequired;

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.combinedText
    );
  });

  it('Unsuccessful sign up with Email and Password empty', () => {
    cy.get(selectors.inputSelectors.usernameField).type('test1233wwwqaj');

    cy.get(selectors.itemSelectors.createButton).click();

    const combinedText =
      data.errorMessage.emailRequired + data.errorMessage.passwordRequired;

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.combinedText
    );
  });

  it('Unsuccessful sign up with Username, Password and Email empty', () => {
    cy.get(selectors.itemSelectors.createButton).click();

    const combinedText =
      data.errorMessage.usernameRequired +
      data.errorMessage.emailRequired +
      data.errorMessage.passwordRequired;

    cy.get(selectors.itemSelectors.notification).should(
      'have.text',
      data.errorMessage.combinedText
    );
  });

  it('Check Privacy policy link', () => {
    cy.get(selectors.itemSelectors.privacyPolicyButton).click();

    cy.get(selectors.privacyPolicyPage.title).should(
      'have.text',
      selectors.privacyPolicyPage.privacyPolicyTitleText
    );
  });

  it('Check Sign in link', () => {
    cy.get(selectors.itemSelectors.signInButton).click();

    cy.get(selectors.signInPage.formTitle).should(
      'have.text',
      selectors.signInPage.formTitleText
    );
  });
});
