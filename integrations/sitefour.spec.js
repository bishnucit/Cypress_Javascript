// sitefour.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//Download the app from https://github.com/cypress-io/cypress-realworld-app

/// <reference types="cypress"/>


const testURL = 'http://localhost:3000';



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

describe('Verify all the elements of the websites are existing', () => {

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

});
