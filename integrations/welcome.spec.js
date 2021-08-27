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

const testURL = 'https://example.cypress.io/todo';
describe('Test Cases on a test website', () => {

    beforeEach(() => {
    cy.visit(testURL)
  })

    it('TC001 - checks all elements in the site', () => {
        cy.log('Verifying that all UI elements are present');
        cy.contains('todos').should('exist');
        cy.contains('Pay electric bill').should('exist');
        cy.contains('Walk the dog').should('exist');
        cy.contains('2 items left').should('exist');
        cy.contains('All').should('exist');
        cy.contains('Active').should('exist');
        cy.contains('Completed').should('exist');
    });

    it('TC002 - displays logo of the company', () => {
        cy.log('Verifying the logo of the company');
        cy.get('[class=header]').should('be.visible');
    });

    it('TC003 - verify 2 items are displayed',() => {
        cy.log('Verifying the default todo labels are visible');
        cy.get(':nth-child(1) > .view > label').should('be.visible');
        cy.get(':nth-child(2) > .view > label').should('be.visible');
    });

    it('TC004 - verify items content',() => {
        cy.log('Verifying the default todo labels having proper texts ');
        cy.get(':nth-child(1) > .view > label').should('have.text', 'Pay electric bill');
        cy.get(':nth-child(2) > .view > label').should('have.text', 'Walk the dog');
    });

    it('TC005 - remove first default item', () =>{
        cy.log('Removing first item after completing it');
        //cy.contains('Pay electric bill').get('.todo-button').as('closeBtn');
        //cy.get('@closeBtn').click({ force: true });
        cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
        cy.contains('Pay electric bill').parent().find('.todo-button').invoke('show').click({ force: true });
        //cy.contains('Pay electric bill').find('.destroy').invoke('show').click({ force: true });
    });

    it('TC006 - adding a new todo item', () => {
        cy.log('Adding a new todo item');
        const newItem = 'Wash the clothes';
        cy.contains('Wash the clothes').should('not.exist');
        //cy.contains('Wash the clothes').should('not.be.visible');
        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);
        cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem);
    });

    it('TC007 - navigating through 3 tabs', () => {
        cy.log('Navigating through the tabs');
        cy.get(".todo-list li").as('list');
        cy.contains('All').click();
        //cy.url().should('eq', 'https://example.cypress.io/todo#/');
        //cy.location('pathname').should('include', 'todo');
        cy.get('@list').should('have.length', 2)
        cy.contains('Active').click();
        //cy.url().should('eq', 'https://example.cypress.io/todo#/active');
        cy.get('@list').should('have.length', 2)
        cy.contains('Completed').click();
        //cy.url().should('eq', 'https://example.cypress.io/todo#/completed');
        //cy.location('pathname').should('include', 'completed');
        cy.get('@list').should('have.length', 0)
    });

    it('TC008 - completing first todo item and then remove the item from list', () => {
        cy.log('Completing first item in the todo list');
        cy.get(".todo-list li").as('list');
        cy.get('@list').should('have.length', 2);
        //cy.contains('Clear Completed').should('not.be.visible');
        cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check()
        cy.get('.footer > .todo-button').should('be.visible');
        cy.get('.footer > .todo-button').click();
        cy.get('@list').should('have.length', 1);
    });

    context( 'Scenario1 - When list has 1 item', () => {
        beforeEach(() => {
            //cy.log('Removes the default items for Scenario 1');
            cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check();
            //cy.contains('Walk the dog').parent().find('input[type=checkbox]').check();
            cy.get('.todo-list li').should('have.length', 2);
        });

        it('TC09 - Verify the active list is 1', () => {
            cy.log('Default items should not exist check');
            cy.contains('Active').click();
            cy.get('.todo-list li').should('have.length', 1);
            cy.contains('Pay electric bill').should('not.exist');
            cy.contains('Walk the dog').should('exist');
        });

        it('TC010 - Verify the completed list has 2 elements', () => {
            cy.log('2 items should exist');
            cy.contains('Completed').click();
            cy.get('.todo-list li').should('have.length', 1);
            cy.contains('Pay electric bill').should('exist');
            cy.contains('Walk the dog').should('not.exist');
        });
    });
    
  });

//ALL PASS - https://prnt.sc/1qm5awy
