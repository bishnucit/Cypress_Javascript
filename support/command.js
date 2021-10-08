// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cypress-downloadfile/lib/downloadFileCommand');

import 'cypress-file-upload';


Cypress.Commands.add('waitForLoader', () => {
    cy.get('#loading', { timeout: 5000 }).should('have.length', 1)
  });

Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart");
    cy.get(targetEl).trigger("drop");
    cy.get(targetEl).trigger("dragend");
  });

Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
});

let LOCAL_STORAGE = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE[key]);
  });
});

Cypress.Commands.add('login_sitefour', () => {
  cy.visit('http://localhost:3000/signin');
  cy.get('#username').clear().type('tester');
  cy.get('#password').clear().type('tester');
  cy.get('[data-test=signin-submit]').click();
  cy.wait(2000);
});
