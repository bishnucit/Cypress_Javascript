/// <reference types="cypress" />



const testURL = 'http://the-internet.herokuapp.com/';
describe('Test Cases on a test website', () => {

    beforeEach(() => {
    cy.visit(testURL)
    });

    context('Page 13 - Dynamic Controls page check', () => {
        beforeEach(() => {
            cy.contains('Dynamic Controls').click();
            cy.get('.example').should('exist');
            cy.get('p').should('exist');
            });

            it('TC031 - Verify all elements are visible', () => {
                cy.get('.example > :nth-child(3)').should('exist');
                cy.get('#checkbox').should('exist');
                cy.get('#checkbox-example > button').should('exist');
                cy.get('.example > :nth-child(8)').should('exist');
                cy.get('#input-example > input').should('exist');
                cy.get('#input-example > button').should('exist');
            });

            it('TC032 - verify dynamic controls of checkbox', () => {
                cy.get('#checkbox > input').should('not.be.checked');
                cy.get('#checkbox-example > button').click();
                cy.waitForLoader();
                cy.get('#checkbox > input').should('not.exist');
                cy.get('#message').should('have.text', "It's gone!");
                cy.get('#checkbox-example > button').click();
                cy.waitForLoader();
                cy.get('#message').should('have.text', "It's back!");
                cy.get('#checkbox').should('exist');
            });

            it('TC033 - verify dynamic controls of textbox', () => {
                cy.get('#input-example > input').should('not.be.enabled');
                cy.get('#input-example > button').click();
                cy.waitForLoader();
                cy.get('#input-example > input').should('be.enabled');
                cy.get('#message').should('have.text', "It's enabled!");
		        cy.get('#input-example > input').type('Hello');
                cy.get('#input-example > button').click();
                cy.waitForLoader();
                cy.get('#message').should('have.text', "It's disabled!");
                cy.get('#input-example > input').should('not.be.enabled');

            });

     });


});
