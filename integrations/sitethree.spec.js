// sitethree.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress"/>


const testURL = 'http://automationpractice.com/'

describe('Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

    it('TC001 - Verify elements of home page', () => {
        cy.get('.row > a > .img-responsive').should('exist');
        cy.get('.shop-phone').should('exist');
        cy.get('.shop-phone > strong').should('have.text', '0123-456-789').should('exist');

        cy.get('#contact-link > a').should('have.text', 'Contact us').should('exist');
        cy.get('#contact-link > a').then(link => {
                cy.request(link.prop('href')).its('status').should('eq', 200);
        });

        cy.get('.login').should('exist');
        cy.get('.login').then(link => {
                cy.request(link.prop('href')).its('status').should('eq', 200);
        });

        cy.get('.logo').should('be.visible');
        cy.get('#search_query_top').should('exist');
        cy.get('#searchbox > .btn').should('exist');
        cy.get('[title="View my shopping cart"]').should('be.visible');
        cy.get('.ajax_cart_no_product').should('have.text', '(empty)');

        cy.contains('Women').should('be.visible');
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible');
        cy.get('.sf-menu > :nth-child(3) > a').should('be.visible');

        cy.get('#htmlcontent_top > .htmlcontent-home > .htmlcontent-item-1 > .item-link > .item-img').should('exist');
        cy.get('#htmlcontent_top > .htmlcontent-home > .htmlcontent-item-2 > .item-link > .item-img').should('exist');
        cy.get('#homeslider > :nth-child(4) > a > img').should('exist');
        cy.get('.bx-prev').should('exist');
        cy.get('.bx-next').should('exist');

        cy.get('.active > .homefeatured').should('exist');
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').should('exist');

        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');

    });

});


describe('Register a user and then purchase a product and then checkout using bank order', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Without registering browse few products and add to cart and abandon cart at checkout', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Browse few products and compare product and add to cart and checkout after registering', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});


describe('Verify the Social Platform links are valid and working fine and subscribe to newsletter', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Search dress in search bar and buy first two cheapest dresses ', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Verify the catalog controls are working as intended', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});

describe('Compare items after logging in, share the comparison on all social media and then delete them from compare page', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });

});
