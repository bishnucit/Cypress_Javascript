// sitethree.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress-downloadfile"/>


const testURL = 'http://automationpractice.com/'

describe('Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

    it('TC001 - Verify elements of home page', () => {

    });

});


describe('Register a user and then purchase a product and then checkout using bank order', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Without registering browse few products and add to cart and abandon cart at checkout', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Browse few products and compare product and add to cart and checkout after registering', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Verify the Social Platform links are valid and working fine and subscribe to newsletter', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Search dress in search bar and buy first two cheapest dresses ', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Verify the catalog controls are working as intended', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Compare items after logging in, share the comparison on all social media and then delete them from compare page', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});
