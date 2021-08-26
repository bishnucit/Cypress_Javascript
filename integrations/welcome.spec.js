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


describe('Test Cases on a test website', () => {

    it('visit test site',() => {
        cy.log('Visiting the test website')
        cy.visit('https://example.cypress.io/todo')
    })

    it('checks all elements in the site', () => {
        cy.log('Verifying that all UI elements are present')
        cy.contains('todos').should('exist')
        cy.contains('Pay electric bill').should('exist')
        cy.contains('Walk the dog').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')
    })

    it('displays logo of the company', () => {
        cy.log('Verifying the logo of the company')
        cy.get('[class=header]').should('be.visible');
    })

    it('verify 2 items are displayed',() => {
        cy.log('Verifying the default todo labels are visible')
        cy.get(':nth-child(1) > .view > label').should('be.visible');
        cy.get(':nth-child(2) > .view > label').should('be.visible');
    })

    it('verify items content',() => {
        cy.log('Verifying the default todo labels having proper texts ')
        cy.get(':nth-child(1) > .view > label').should('have.text', 'Pay electric bill');
        cy.get(':nth-child(2) > .view > label').should('have.text', 'Walk the dog');
    })

    it('remove first default item', () =>{
        cy.log('Trying to remove first list item, doesnot work so will be skipped')
        //cy.contains('Pay electric bill').get('.todo-button').as('closeBtn')
        //cy.get('@closeBtn').click({ force: true })
        cy.contains('Pay electric bill').find('.destroy').invoke('show').click({ force: true })

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it('adding a new todo item', () => {
        cy.log('Adding a new todo item')
        const newItem = 'Wash the clothes'

        cy.contains('Wash the clothes').should('not.exist')
        //cy.contains('Wash the clothes').should('not.be.visible')
        cy.get('[data-test=new-todo]').type(`${newItem}`)
        cy.get('[for="toggle-all"]').click()
        cy.contains(newItem).should('exist')
        cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem)
        cy.get('[for="toggle-all"]').click()

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it.skip('navigating through 3 tabs', () => {
        cy.log('Navigating through the tabs')
        cy.contains('All').click()
        cy.url().should('eq', 'https://example.cypress.io/todo#/')
        cy.contains('Active').click()
        cy.url().should('eq', 'https://example.cypress.io/todo#/active')
        cy.contains('Completed').click()
        cy.url().should('eq', 'https://example.cypress.io/todo#/completed')

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

    it.skip('completing first todo item and then remove the item from list', () => {
        cy.log('Completing first item in the todo list')
        cy.get(".todo-list li").as('list')
        cy.get('@list').should('have.length', 3)
        cy.contains('Clear Completed').should('not.be.visible')
        cy.get(':nth-child(1) > .view > input').click()
        cy.contains('Clear Completed').should('be.visible')
        cy.contains('Clear Completed').click()
        cy.get('@list').should('have.length', 2)

        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
  })
