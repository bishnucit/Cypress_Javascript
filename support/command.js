Cypress.Commands.add('waitForSpinners', () => {
  cy.get('.spinner', { timeout: 10_000 }).should('have.length', 0)
})
