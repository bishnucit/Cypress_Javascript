/// <reference types="cypress" />

const testURL = 'http://the-internet.herokuapp.com/';
describe('Test Cases on a test website', () => {

    beforeEach(() => {
    cy.visit(testURL);
  });

  it('TC001 - checks all elements in the site', () => {
        cy.log('Verifying that all links are visible');
        cy.contains('A/B Testing').should('exist');
        cy.contains('Add/Remove Elements').should('exist');
        cy.contains('Basic Auth').should('exist');
        cy.contains('Broken Images').should('exist');
        cy.contains('Challenging DOM').should('exist');
        cy.contains('Checkboxes').should('exist');
        cy.contains('Context Menu').should('exist');
        cy.contains('Digest Authentication').should('exist');
        cy.contains('Disappearing Elements').should('exist');
        cy.contains('Drag and Drop').should('exist');
        cy.contains('Dropdown').should('exist');
        cy.contains('Dynamic Content').should('exist');
        cy.contains('Dynamic Controls').should('exist');
        cy.contains('Dynamic Loading').should('exist');
        cy.contains('Entry Ad').should('exist');
        cy.contains('Exit Intent').should('exist');
        cy.contains('File Download').should('exist');
        cy.contains('File Upload').should('exist');
        cy.contains('Floating Menu').should('exist');
        cy.contains('Forgot Password').should('exist');
        cy.contains('Form Authentication').should('exist');
        cy.contains('Frames').should('exist');
        cy.contains('Geolocation').should('exist');
        cy.contains('Horizontal Slider').should('exist');
        cy.contains('Hovers').should('exist');
        cy.contains('Infinite Scroll').should('exist');
        cy.contains('JQuery UI Menus').should('exist');
        cy.contains('JavaScript Alerts').should('exist');
        cy.contains('JavaScript onload event error').should('exist');
        cy.contains('Key Presses').should('exist');
        cy.contains('Large & Deep DOM').should('exist');
        cy.contains('Multiple Windows').should('exist');
        cy.contains('Nested Frames').should('exist');
        cy.contains('Notification Messages').should('exist');
        cy.contains('Redirect Link').should('exist');
        cy.contains('Secure File Download').should('exist');
        cy.contains('Shadow DOM').should('exist');
        cy.contains('Shifting Content').should('exist');
        cy.contains('Slow Resources').should('exist');
        cy.contains('Sortable Data Tables').should('exist');
        cy.contains('Status Codes').should('exist');
        cy.contains('Typos').should('exist');
        cy.contains('WYSIWYG Editor').should('exist');

    });

  it('TC002 Navigating to A/B testing page verifying click navigation - ', (done) => {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('window:before:unload', (e) => {
    // no return value on the event
      expect(e.returnValue).to.be.empty//can also be undefined
    });
    cy.on('window:unload', (e) => {
      // using mocha's async done callback to finish
      // this test so we are guaranteed the application
      // was unloaded while navigating to the new page
      done();
    });
    cy.contains('A/B Testing').click();
    });
});
