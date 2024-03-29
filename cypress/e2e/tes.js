import data from '../fixtures/data.json'

import selectors from '../fixtures/selectors.json'


describe('Sign up page tests', () => {
    beforeEach(() => {
        cy.visit('https://rotogrinders.com/sign-up')
    });

    it('Successful sign up using Username with lowercase letters and numbers', () => {

        cy.get(selectors.usernameField).type('username111123344ww1')

        cy.get('div.form-body div:nth-child(2) input').type('test111123433313ww@mnsaf.com')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('article.post h1').should('have.text','Welcome to RotoGrinders! Thanks for signing up!')
    });

 it('Successful sign up using Username with upercase letters and numbers', () => {

        cy.get('input#username').type('TEST123332WW')

        cy.get('div.form-body div:nth-child(2) input').type('fapa1qrwes27qq521@mnsaf.com')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('article.post h1').should('have.text','Welcome to RotoGrinders! Thanks for signing up!')
    });

it('Successful sign up using Username with upercase and lowercase letters', () => {

    cy.get('input#username').type('TESTtestQAAA')

    cy.get('div.form-body div:nth-child(2) input').type('fapa1wffrwes27521@mnsaf.com')

    cy.get('input#password').type('password123')

    cy.get('input.button.cta').click()

    cy.get('article.post h1').should('have.text','Welcome to RotoGrinders! Thanks for signing up!')
});

it('Unsuccessful sign up using Username with letters and special characters', () => {

    cy.get('input#username').type('test_www!!')

    cy.get('div.form-body div:nth-child(2) input').type('fapa1e12rwes27521@mnsaf.com')

    cy.get('input#password').type('password123')

    cy.get('input.button.cta').click()

    cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameMustContainsLettersOrNumbers)
});

it('Unsuccessful sign up using Username with letters and spaces', () => {

    cy.get('input#username').type('test www QADD')

    cy.get('div.form-body div:nth-child(2) input').type('fapa1a13rwes27521@mnsaf.com')

    cy.get('input#password').type('password123')

    cy.get('input.button.cta').click()

    cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameMustContainsLettersOrNumbers)
});

it('Unsuccessful sign up with Username empty', () => {

        cy.get('div.form-body div:nth-child(2) input').type('fapa1s14r222webbswff27521@mnsaf.com')

        cy.get('input#password').type('password123')

        // !!!!!!!!!!!!reCaptcha!!!!!!!!!!!!!!!!
        // cy.get('span.recaptcha-checkbox').check() 

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameRequired)
    });

    it('Unsuccessful sign up with Email empty', () => {

        cy.get('input#username').type('test1233wwwssqa')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.emailRequired)
    });

    it('Unsuccessful sign up using Email without username', () => {

        cy.get('input#username').type('test1234wwwqa1')

        cy.get('div.form-body div:nth-child(2) input').type('@mnsaf.com')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.emailMustBeValid)
    });

        it('Unsuccessful sign up using Email without @', () => {

        cy.get('input#username').type('test1234wwwqaf')

        cy.get('div.form-body div:nth-child(2) input').type('test1f123qabc.mnsaf.com')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.emailMustBeValid)
    });

       it('Unsuccessful sign up using Email without domain', () => {

        cy.get('input#username').type('test1235wwwqaz')

        cy.get('div.form-body div:nth-child(2) input').type('test123qabcpp@')

        cy.get('input#password').type('password123')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.emailMustBeValid)
    });

    it('Unsuccessful sign up using Password with <6 characters', () => {

        cy.get('input#username').type('test1236www1qx')

        cy.get('div.form-body div:nth-child(2) input').type('fapa1t15rwes27521@mnsaf.com')

        cy.get('input#password').type('passwo')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.passwordMustBeSixOrMoreCharactersLong)
    });

        // !!!! Missing specification for password field verification so next cases can't be written and tested.


//     it('Successful sign up using Password with only upercase letters', () => {

//         cy.get('input#username').type('test1238www')

//         cy.get('div.form-body div:nth-child(2) input').type('fapa17rwes27521@mnsaf.com')

//         cy.get('input#password').type('PASSWORD')

//         cy.get('input.button.cta').click()

// });  

//      it('Successful sign up using Password with only lowercase letters', () => {

    //         cy.get('input#username').type('test1237www')
    
    //         cy.get('div.form-body div:nth-child(2) input').type('fapa16rwes27521@mnsaf.com')
    
    //         cy.get('input#password').type('password')
    
    //         cy.get('input.button.cta').click()
    
    // });  

    //      it('Successful sign up using Password with numbers', () => {

    //         cy.get('input#username').type('test1238www')
    
    //         cy.get('div.form-body div:nth-child(2) input').type('fapa17rwes27521@mnsaf.com')
    
    //         cy.get('input#password').type('1234567')
    
    //         cy.get('input.button.cta').click()
    
    // });  

        //      it('Successful sign up using Password with only special characters', () => {

    //         cy.get('input#username').type('test1239www')
    
    //         cy.get('div.form-body div:nth-child(2) input').type('fapa18rwes27521@mnsaf.com')
    
    //         cy.get('input#password').type('!!##%%&')
    
    //         cy.get('input.button.cta').click()
    
    // });  

            //      it('Successful sign up using Password with only spaces', () => {

    //         cy.get('input#username').type('test1240www')
    
    //         cy.get('div.form-body div:nth-child(2) input').type('fapa19rwes27521@mnsaf.com')
    
    //         cy.get('input#password').type('       ')
    
    //         cy.get('input.button.cta').click()
    
    // });  

    it('Unsuccessful sign up with Password empty', () => {

        cy.get('input#username').type('test1241wwwqayy')

        cy.get('div.form-body div:nth-child(2) input').type('fapa1u20rwes27521@mnsaf.com')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').contains(data.errorMessage.passwordRequired)
    });

    it('Unsuccessful sign up with Username and Email empty', () => {

        cy.get('input#password').type('password112')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameAndEmailRequired)
    });

    it('Unsuccessful sign up with Username and Password empty', () => {

        cy.get('div.form-body div:nth-child(2) input').type('fapa1o21rwes27521@mnsaf.com')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameAndPasswordRequired)
    });

    it('Unsuccessful sign up with Email and Password empty', () => {
        cy.get('input#username').type('test1233wwwqaj')

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.emailAndPasswordRequired)
    });

    it('Unsuccessful sign up with Username, Password and Email empty', () => {

        cy.get('input.button.cta').click()

        cy.get('div.notification.error p').should('have.text',data.errorMessage.usernameEmailAndPasswordRequired)
    });

    it('Check Privacy policy link', () => {

       cy.get('div.form-footer ul li p a').click()

       cy.get('div.form-footer a').should('have.text','Privacy Policy') 
    });

     it('Check Sign in link', () => {

        cy.get('section.page-content p:nth-child(2) a').click()
 
        cy.get('header.module-header h1').should('have.text','Sign In') 
     });
})