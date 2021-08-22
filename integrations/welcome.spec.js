// welcome.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// welcome_page_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />


describe('visit the site', () => {

    it('visit test site',() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('displays logo of the company', () => {
        cy.get('[class=header]').should('be.visible');
    })

    it('verify 2 items are displayed',() => {
        cy.get(':nth-child(1) > .view > label').should('be.visible');
        cy.get(':nth-child(2) > .view > label').should('be.visible');
    })

    it('verify items content',() => {
        cy.get(':nth-child(1) > .view > label').should('have.text', 'Pay electric bill');
        cy.get(':nth-child(2) > .view > label').should('have.text', 'Walk the dog');
    })


    it('remove both default items', () =>{
        //cy.get(':nth-child(1) > .view > label').trigger('mouseover');
        //cy.get(':nth-child(1) > .view > button').click({force:true})


    } )


  })
