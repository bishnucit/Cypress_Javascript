// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Alternatively you can use CommonJS syntax:
// require('./commands')
import './commands'
//import failOnConsoleError, { consoleType } from "cypress-fail-on-console-error"

/* Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

const config = {
    excludeMessages: ['firstError', 'secondError'],
    includeConsoleTypes: [consoleType.ERROR, consoleType.WARN],
}; */

/* failOnConsoleError(config);

Cypress.on("window:before:load", win => {
  cy.stub(win.console, "error").callsFake(msg => {
    //ignores known error
    if (msg.includes("This is an error")) {
      return null;
    }
    // log out to the terminal
    cy.now("task", "error", msg);
    // log to Command Log and fail the test
    throw new Error(msg);
  });
}); */
