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
        //Title Component
        cy.get('.row > a > .img-responsive').should('exist');
        cy.get('.shop-phone').should('exist');
        cy.get('.shop-phone > strong').should('have.text', '0123-456-789').should('exist');
        //Contact us component
        cy.get('#contact-link > a').should('have.text', 'Contact us').should('exist');
        cy.get('#contact-link > a').then(link => {
                cy.request(link.prop('href')).its('status').should('eq', 200);
        });
        //Sign in component
        cy.get('.login').should('exist');
        cy.get('.login').then(link => {
                cy.request(link.prop('href')).its('status').should('eq', 200);
        });
        //Header components
        cy.get('.logo').should('be.visible');
        cy.get('#search_query_top').should('exist');
        cy.get('#searchbox > .btn').should('exist');
        cy.get('[title="View my shopping cart"]').should('be.visible');
        cy.get('.ajax_cart_no_product').should('have.text', '(empty)');
        //Menu items
        cy.contains('Women').should('be.visible');
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible');
        cy.get('.sf-menu > :nth-child(3) > a').should('be.visible');
        //Banner images
        cy.get('#htmlcontent_top > .htmlcontent-home > .htmlcontent-item-1 > .item-link > .item-img').should('exist');
        cy.get('#htmlcontent_top > .htmlcontent-home > .htmlcontent-item-2 > .item-link > .item-img').should('exist');
        cy.get('#homeslider > :nth-child(4) > a > img').should('exist');
        cy.get('.bx-prev').should('exist');
        cy.get('.bx-next').should('exist');
        //Popular tab and Best sellers tab
        cy.get('.active > .homefeatured').should('exist');
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').should('exist');
        //1st item
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Faded Short Sleeve T-shirts');
        });
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$16.51');
        });
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //2nd item
        cy.get('#homefeatured > :nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > :nth-child(2) > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Blouse');
        });
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$27.00');
        });
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');


    });

});


describe('Register a user and then purchase a product and then checkout using bank order', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});


describe('Without registering browse few products and add to cart and abandon cart at checkout', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});


describe('Browse few products and compare product and add to cart and checkout after registering', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});


describe('Verify the Social Platform links are valid and working fine and subscribe to newsletter', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});

describe('Search dress in search bar and buy first two cheapest dresses ', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});

describe('Verify the catalog controls are working as intended', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});

describe('Compare items after logging in, share the comparison on all social media and then delete them from compare page', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Coming soon', () => {     });
});

describe('Make a purchase after sign in on an iphone - x', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Testing on a iphone-x', () => {
    //    cy.viewport('iphone-x');
    //});
});

describe('Make a purchase after sign in on an macbook 16', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Testing on a macbook-16', () => {
    //    cy.viewport('macbook-16');
    //});
});

describe('Make a purchase after sign in on an ipad 2', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Testing on a ipad-2', () => {
    //    cy.viewport('ipad-2');
    //});
});

describe('Make a purchase after sign in on samsung s10', () => {

    beforeEach(() => {
        cy.visit(testURL);
    });
    //it('Testing on a Samsung S10', () => {
    //    cy.viewport('samsung-s10');
    // });
});
