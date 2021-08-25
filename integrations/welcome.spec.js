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

    it('remove first default item', () =>{
        //cy.contains('Pay electric bill').get('.todo-button').as('closeBtn')
        //cy.get('@closeBtn').click({ force: true })
        cy.contains('Pay electric bill')//.find(':nth-child(1) > .view > button').click({ force: true })

    })
//
    it('checks all elements in the site', () => {
        cy.contains('todos').should('exist')
        cy.contains('Pay electric bill').should('exist')
        cy.contains('Walk the dog').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

    })
  })
