// loginpage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="cypress" />


describe('example to-do app', () => {

    it('visit test site',() => {
        cy.visit('http://the-internet.herokuapp.com/')
    })

    it('displays logo of the company', () => {
        cy.get('[class=heading]').should('be.visible');
    })


  })
