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
    cy.log('Navigating to A/B testing page');
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
    cy.contains('A/B Test Variation 1').should('be.visible');
    });

  context('Page 2 - Add/Remove Elements page testing', () => {
    beforeEach(() => {
      cy.contains('Add/Remove Elements').click();
      cy.get('.example').should('exist');
    });

      it('TC003 - Add 5 items and verify if 5 buttons are shown', () => {
          for (let i = 0; i < 5; i++) {
              cy.get('[onclick="addElement()"]').click();
            }
          cy.get('button:visible:contains("Delete")').should('have.length', 5);
       });

      it('TC004 - Add 2 items and delete 2 of them', () => {
        for(let i = 0; i<2; i++){
          cy.get('[onclick="addElement()"]').click();
        }
        cy.get('button:visible:contains("Delete")').should('have.length', 2);
        cy.get('#elements > :nth-child(1)').click();
        cy.get('button:visible:contains("Delete")').should('have.length', 1);
        cy.get('#elements > :nth-child(1)').click();
        cy.get('Delete').should('not.exist');
       });

      it('TC005 - Add 6 items and delete 1st and last of them', () => {
        for(let i = 0; i<6; i++){
          cy.get('[onclick="addElement()"]').click();
        }
        cy.get('button:visible:contains("Delete")').should('have.length', 6);
        cy.get('#elements > :nth-child(6)').click();
        cy.get('button:visible:contains("Delete")').should('have.length', 5);
        cy.get('#elements > :nth-child(1)').click();
        cy.get('button:visible:contains("Delete")').should('have.length', 4);
       });
    });

  context('Page 3 - Auth page testing', () => {
    it('TC006 - Login with username and password into a protected page', () => {
        cy.visit("http://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: 'admin',
                password: 'admin'
            }});
        cy.get('p').should('be.visible');
    });

    it('TC007 - Login with wrong username and password into a protected page', () => {
        //Cypress on receiving 401 error stops the code so failstatuscode false is passed to ignore that
        cy.visit("http://the-internet.herokuapp.com/basic_auth",{failOnStatusCode: false},  {
            auth: {
                username: '',
                password: ''
            }});
        cy.get('p').should('not.exist');
        cy.contains('Not authorized').should('be.visible');
    });
  });

  context('Page 4 - Broken image page testing', () => {
        beforeEach(() => {
            cy.contains('Broken Images').click();
            cy.get('.example').should('exist');
            });

        it('TC008 - Navigate to broken image page and verify page should show 3 image', () => {
            cy.get('.example img').should('have.length', 3);
        });

        it('TC009 - Verify the images are loading fine, height and width are > 0 when loads  ', () => {
          cy.get('img', { includeShadowDom: true }).filter('[src]').filter(':visible').should(($imgs) => $imgs.map((i, /** @type {HTMLImageElement} */ img) => expect(img.naturalWidth).to.be.greaterThan(0)));
        });

        it('TC010 - Verifies the root url of all images have blank text', () =>{
            cy.get('.example').find('>img').should('have.text', '');
            cy.screenshot('broken_image_verification');
            //cypress is not made for this type of checking so best option is to take screenshots for manual verification.
        });
     });

  context('Page 5 - Challenging page testing', () => {
        beforeEach(() => {
            cy.contains('Challenging DOM').click();
            cy.get('.large-centered').should('exist');
            });

        it('TC011 - Verify all element are visible', () => {
            cy.get('.columns').find('.button:first').should('exist');
            cy.get('.columns').find('.alert').should('exist');
            cy.get('.columns').find('.success').should('exist');
            cy.get('.columns>.button').should('have.length', 3);
            cy.get('#canvas').should('exist');
            cy.get('#content > div > div > div > div.large-10.columns > table').should('exist');
        });

        it('TC012 - Click alert button and verify the content changes', () => {
            cy.wait(2000);
            cy.screenshot('before_click_alert.png');
            cy.get('.columns').find('.alert').click();
            cy.wait(2000);
            cy.screenshot('after_click_alert.png');
        });

        it('TC013 - Click success button and verify the content changes', () => {
            cy.wait(2000);
            cy.screenshot('before_click_success.png');
            cy.get('.columns').find('.success').click();
            cy.wait(2000);
            cy.screenshot('after_click_success.png');
        });

        it('TC014 - Click first button and verify the content changes', () => {
            cy.wait(2000);
            cy.screenshot('before_click_first.png');
            cy.get('.columns').find('.button:first').click();
            cy.wait(2000);
            cy.screenshot('after_click_first.png');
        });
     });
});
