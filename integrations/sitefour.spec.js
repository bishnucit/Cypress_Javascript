// sitefour.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//Download the app from https://github.com/cypress-io/cypress-realworld-app

/// <reference types="cypress"/>


const testURL = 'http://localhost:3000';


describe('Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Sign in page - Verify elements of sign in page', () => {

        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('.MuiTypography-h5').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('exist');
        cy.get('.PrivateSwitchBase-input-14').should('exist');
        cy.get('[data-test=signup]').should('exist');
        cy.get('[data-test="signin-submit"]').should('exist');

    });

});
