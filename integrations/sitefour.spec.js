// sitefour.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


//Download the app from https://github.com/cypress-io/cypress-realworld-app

/// <reference types="cypress"/>


const testURL = 'http://localhost:3000';


const ONBOARDING = () => {
    cy.get('[data-test=user-onboarding-next]').click();
    cy.get('#bankaccount-bankName-input').clear().type('Tester')
    cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
    cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
    cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test=user-onboarding-next]').click();
};

const LOGIN = () => {
    //login to app (remember to make a user with tester tester before runing automation)
    cy.get('#username').clear().type('tester');
    cy.get('#password').clear().type('tester');
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=sidenav-username]').should('be.visible');
};

const LOGOUT = () => {
    //logout from app
    cy.get('[data-test=sidenav-signout]').should('be.visible');
    cy.get('[data-test=sidenav-signout]').click();
    cy.get('.MuiTypography-h5').should('have.text', 'Sign in');
};

const BODY = () => {
    //verify elements of static body of the website
    cy.get('[data-test=sidenav-username]').should('have.text','@tester');
    cy.get('[data-test=sidenav-user-balance]').should('have.text', '$0.00');
    cy.get('[data-test=sidenav-home]').should('exist');
    cy.get('[data-test=sidenav-user-settings]').should('exist');
    cy.get('[data-test=sidenav-bankaccounts]').should('exist');
    cy.get('[data-test=sidenav-notifications]').should('exist');
    cy.get('[data-test=sidenav-signout]').should('exist');
    cy.get('[data-test=sidenav-toggle]').should('exist');
    cy.get('[data-test=nav-top-new-transaction]').should('exist');
    cy.get('[data-test=nav-top-notifications-link]').should('exist');
    cy.get('[data-test=nav-public-tab]').should('exist');
    cy.get('[data-test=nav-contacts-tab]').should('exist');
    cy.get('[data-test=nav-personal-tab]').should('exist');
    cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
    cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
};

describe('Setting of test setup', () => {
    it('Setup the account for automation testing',() => {
        cy.visit(testURL,{failOnStatusCode: false});
        cy.get('[data-test=signup]').click();
        cy.get('#firstName').clear().type('tester');
        cy.get('#lastName').clear().type('tester');
        cy.get('#username').clear().type('tester');
        cy.get('#password').clear().type('tester');
        cy.get('#confirmPassword').clear().type('tester');
        //onboarding login
        cy.get('[data-test=signup-submit]').click();
        cy.get('#username').clear().type('tester');
        cy.get('#password').clear().type('tester');
        cy.get('[data-test=signin-submit]').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        cy.get('[data-test=user-onboarding-dialog-title] > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next]').click();
        cy.get('[data-test=user-onboarding-dialog-title]').should('be.visible');
        cy.get('#bankaccount-bankName-input').clear().type('Tester')
        cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
        cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        //logout
        LOGOUT();
    });
});

describe('Scenario 1 - Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Sign in page - Verify elements of sign in page', () => {
        //verify elements
        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('.MuiTypography-h5').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('exist');
        cy.get('.PrivateSwitchBase-input-14').should('exist');
        cy.get('[data-test=signup]').should('exist');
        cy.get('[data-test="signin-submit"]').should('exist');
        //login with an existing account and then logout
        LOGIN();
        LOGOUT();
    });


    it('TC002 - Sign up page - Verify elements of sign up page', () => {
        cy.get('[data-test=signup]').click();
        //verify elements
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#confirmPassword').should('exist');
        cy.get('[data-test=signup-submit]').should('exist');
        //login after sign up to verify sign up is working
        var d = new Date();
        var n = d.getTime();
        cy.get('#firstName').clear().type('tester'+n);
        cy.get('#lastName').clear().type('tester'+n);
        cy.get('#username').clear().type('tester'+n);
        cy.get('#password').clear().type('tester'+n);
        cy.get('#confirmPassword').clear().type('tester'+n);
        //onboarding login
        cy.get('[data-test=signup-submit]').click();
        cy.get('#username').clear().type('tester'+n);
        cy.get('#password').clear().type('tester'+n);
        cy.get('[data-test=signin-submit]').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        cy.get('[data-test=user-onboarding-dialog-title] > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next]').click();
        cy.get('[data-test=user-onboarding-dialog-title]').should('be.visible');
        cy.get('#bankaccount-bankName-input').clear().type('Tester')
        cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
        cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC003 - Home page - Verify elements of Home page', () => {
        //login
        LOGIN();
        BODY();
        //logout
        LOGOUT();
    });

    it('TC004 - Contacts page - Verify elements of Contacts page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-contacts-tab]').click();
        cy.contains('Contacts').should('be.visible');
        cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
        cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
        cy.get('[data-test=transaction-list-empty-create-transaction-button]').should('exist');
        cy.get('.MuiGrid-container > :nth-child(1) > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC005 - Mine page - Verify elements of Personal page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-personal-tab]').click();
        cy.contains('Personal').should('be.visible');
        cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
        cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
        cy.get('[data-test=transaction-list-empty-create-transaction-button]').should('exist');
        cy.get('.MuiGrid-container > :nth-child(1) > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC006 - New Transaction page - Verify elements of New Transaction page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-top-new-transaction]').click();
        cy.get('.MuiStepper-root > :nth-child(1)').should('exist');
        cy.get('.MuiStepper-root > :nth-child(3)').should('exist');
        cy.get('.MuiStepper-root > :nth-child(5)').should('exist');
        cy.get('[data-test=user-list-search-input]').should('exist');
        cy.get('[data-test=user-list-item-t45AiwidW]').should('be.visible');
        cy.get('[data-test=user-list-item-qywYp6hS0U]').should('be.visible');
        cy.get('[data-test=user-list-item-bDjUb4ir5O]').should('be.visible');
        cy.get('[data-test=user-list-item-24VniajY1y]').should('be.visible');
        cy.get('[data-test=user-list-item-tsHF6_D5oQ]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC007 - Notifications page - Verify elements of Notification page', () => {

        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-notifications]').click();
        cy.get('.MuiGrid-grid-xs-12 > .MuiPaper-root > :nth-child(1)').should('have.text', 'Notifications');
        cy.get('[data-test=empty-list-header]').should('have.text', 'No Notifications');
        cy.get('[data-test=empty-list-children] > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC008 - My Accounts page - Verify elements of My Accounts page', () => {

        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-user-settings]').click();
        cy.get('.MuiPaper-root > .MuiTypography-root').should('have.text', 'User Settings');
        cy.get('.MuiPaper-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-settings-firstName-input]').should('exist');
        cy.get('[data-test=user-settings-lastName-input]').should('exist');
        cy.get('[data-test=user-settings-email-input]').should('exist');
        cy.get('[data-test=user-settings-phoneNumber-input]').should('exist');
        //three types of getting value from element
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-firstName-input]').value;
            expect(value).to.equal('tester');
        });
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-lastName-input]').value;
            expect(value).to.equal('tester');
        });

        cy.get('[data-test=user-settings-email-input]').should(($input) => {
            const value = $input.val();
            expect(value).to.equal('');
        });

        cy.get('[data-test=user-settings-phoneNumber-input]').invoke('val').should((value) => {
            expect(value).to.equal('');
        });
        //logout
        LOGOUT();
    });

    it('TC009 - Bank Accounts page - Verify elements of Bank Accounts page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-bankaccounts]').click();
        cy.get('.MuiGrid-grid-xs-12 > .MuiPaper-root > .MuiGrid-align-items-xs-center > :nth-child(1) > .MuiTypography-root').should('exist');
        cy.get('[data-test=bankaccount-new]').should('exist');
        cy.get('[data-test=bankaccount-delete]').should('exist');
        //logout
        LOGOUT();
    });
});

describe('Scenario 2 - View first two transactions on Home page and comment and like on the transaction', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Verify two comments are existing', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-item-4AvM8cN1DdS]').should('be.visible');
        cy.get('[data-test=transaction-item-Ke0eaLoOG8Dg]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC002 - Comment and like first comment', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-sender-4AvM8cN1DdS]').click({force: true});
        //like
        cy.get('[data-test=transaction-like-button-4AvM8cN1DdS]').click({force: true});
        //comment
        //cy.scrollTo('top');
        cy.get('[data-test=transaction-comment-input-4AvM8cN1DdS]').type('hello').type('{enter}');
        //logout
        LOGOUT();
    });

    it('TC003 - Comment and like second comment', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-sender-mEYl_ZSc5Qqe]').click({force: true});
        //like
        cy.get('[data-test=transaction-like-button-mEYl_ZSc5Qqe]').click({force: true});
        //comment
        //cy.scrollTo('top');
        cy.get('[data-test=transaction-comment-input-mEYl_ZSc5Qqe]').type('hello').type('{enter}');
        //logout
        LOGOUT();
    });

});

describe('Scenario 3 - View transaction from $0 t0 $500 range on Home page', () => {
    context('Using local storage',  () => {
        before(() => {
            cy.login_sitefour();
            cy.saveLocalStorage();
        });

        it('TC001 - Select $0 to $500 transaction in slider', () => {
            //restoring local storage to avoid login every time (reduces login timing)
            cy.restoreLocalStorage();
            cy.visit(testURL)
            //body check
            BODY();
            cy.get('[data-test=sidenav-home]').click();
            cy.get('[data-test=transaction-list-filter-amount-range-button]').click({force: true});
            cy.get('[data-test=transaction-list-filter-amount-range-slider]').invoke('val', '1').trigger('change').click();
            cy.get('[data-test=transaction-sender-4AvM8cN1DdS]').click({force: true});
            cy.get('[data-test=transaction-detail-header]').should('have.text', 'Transaction Detail');
            cy.get('[data-test=transaction-amount-4AvM8cN1DdS]').should('have.text', '-$190.85');
        });

        it('TC002 - Select transactions for the month of september in date picker', () => {
            cy.restoreLocalStorage();
            cy.visit(testURL);
            ONBOARDING();
            //body check
            BODY();
            cy.get('[data-test=transaction-list-filter-date-range-button]').click({force:true});
            cy.get('[data-date="2021-09-02"]').click();
            cy.wait(500);
            cy.get('[data-date="2021-09-30"]').click();
            cy.wait(500);
            cy.get('[data-test=empty-list-header]').should('have.text', 'No Transactions');
            //logout
            LOGOUT();
        });
    });
});

describe('Scenario 4 - Create a new bank account after login and delete the account', () => {
    context('Using local storage',  () => {
        before(() => {
            cy.login_sitefour();
            cy.saveLocalStorage();
        });

        it('TC001 - Create a new bank account after login and delete after creating immediately', () => {
            //restoring local storage to avoid login every time (reduces login timing)
            cy.restoreLocalStorage();
            cy.visit(testURL)
            //body check
            BODY();
            cy.get('[data-test=sidenav-bankaccounts]').click({force:true});
            cy.get('[data-test=bankaccount-new]').should('be.visible');
            cy.get('[data-test=bankaccount-new]').click({force:true});
            cy.contains('Create Bank Account').should('be.visible');
            cy.contains('Create Bank Account').click({force:true});
            //create account
            cy.get('#bankaccount-bankName-input').clear().type('test123456');
            cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
            cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
            cy.get('[data-test=bankaccount-submit]').click({force:true});
            //delete account
            cy.contains('test123456').should('be.visible');
            cy.wait(3000);
            cy.get('.MuiButton-label').last().click({force:true});
            cy.contains('test123456 (Deleted)').should('be.visible');
            //logout
            LOGOUT();
        });
    });
});
