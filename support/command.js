Cypress.Commands.add('waitForSpinners', () => {
  cy.get('.loader__container', { timeout: 10_000 }).should('have.length', 0)
})
