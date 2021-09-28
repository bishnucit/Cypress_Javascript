// sitethree.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress"/>


const testURL = 'http://automationpractice.com/';

const HEADER_UNSIGNED_VALIDATION = () => {
    //Title Component
    cy.get('.row > a > .img-responsive').should('exist');
    cy.get('.shop-phone').should('exist');
    cy.get('.shop-phone > strong').should('have.text', '0123-456-789').should('exist');
    //Contact us component
    cy.get('#contact-link > a').should('have.text', 'Contact us').should('exist');
    /* cy.get('#contact-link > a').then(link => {
            cy.request(link.prop('href')).its('status').should('be.oneOf', [200,304,508]);
    }); */
    //Sign in component
    cy.get('.login').should('exist');
    /* cy.get('.login').then(link => {
            cy.request(link.prop('href')).its('status').should('be.oneOf', [200,304,508]);
    }); */
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
}

const FOOTER_VALIDATION = () => {
    //Newsletter content
    cy.get('#newsletter_block_left > h4').should('exist');
    cy.get('#newsletter-input').should('exist');
    cy.get('.form-group > .btn').should('exist');
    //Social media content
    cy.get('#social_block > h4').should('exist');
    cy.get('.facebook > a').should('exist');
    cy.get('.twitter > a').should('exist');
    cy.get('.youtube > a').should('exist');
    cy.get('.google-plus > a').should('exist');
    //Footer content
    cy.get('.blockcategories_footer').should('exist');
    cy.get('#block_various_links_footer').should('exist');
    cy.get('#footer > .row > :nth-child(7)').should('exist');
    cy.get('#block_contact_infos').should('exist');
    //copywright content
    cy.get('.bottom-footer > div').should('exist');
}

describe('Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Verify elements of home page', () => {

        HEADER_UNSIGNED_VALIDATION();

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
        //third item
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Printed Dress');
        });
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$26.00');
        });
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .last-item-of-tablet-line.first-item-of-mobile-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //fourth item
        cy.get('#homefeatured > .last-in-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > .last-in-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Printed Dress');
        });
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$50.99');
        });
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .last-in-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //fifth item
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').should('be.visible');
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Printed Summer Dress');
        });
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$28.98');
        });
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .first-in-line.last-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //sixth item
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .left-block > .product-image-container').should('be.visible');
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Printed Summer Dress');
        });
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$30.50');
        });
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').should('exist');
        cy.get('#homefeatured > .last-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //seventh item
        cy.get('#homefeatured > .last-mobile-line > .product-container > .left-block > .product-image-container').should('be.visible');
        cy.get('#homefeatured > .last-mobile-line > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile > .icon-eye-open').should('exist');
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > h5 > .product-name').should('exist');
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > h5 > .product-name').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('Printed Chiffon Dress');
        });
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .content_price > .price').should(($div) =>{
            const text = $div.text();
            expect(text).to.include('$16.40');
        });
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .button-container > .lnk_view > span').should('exist');
        //Image components
        cy.get('#homefeatured > .last-mobile-line > .product-container > .right-block > .content_price > .price').should('exist');
        cy.get('#htmlcontent_home > .htmlcontent-home > .htmlcontent-item-2 > .item-link > .item-img').should('exist');
        cy.get('.htmlcontent-item-3 > .item-link > .item-img').should('exist');
        cy.get('.htmlcontent-item-4 > .item-link > .item-img').should('exist');
        cy.get('.htmlcontent-item-5 > .item-link > .item-img').should('exist');
        //Social FB content
        cy.get('#facebook_block > h4').should('exist');
        cy.get('.facebook-fanbox').should('exist');
        //Visit us, call us, pay dues content
        cy.get('#icon-truck').should('exist');
        cy.get(':nth-child(1) > .type-text > h3').should('exist');
        cy.get(':nth-child(1) > .type-text > p').should('exist');
        cy.get('#icon-phone').should('exist');
        cy.get(':nth-child(2) > .type-text > h3').should('exist');
        cy.get(':nth-child(2) > .type-text > p').should('exist');
        cy.get('.type-text > p > .btn').should('exist');
        cy.get('#icon-credit-card').should('exist');
        cy.get(':nth-child(3) > .type-text > h3').should('exist');
        cy.get(':nth-child(3) > .type-text > p').should('exist');
        //custom block content
        cy.get('#cmsinfo_block > :nth-child(2) > h3').should('exist');
        cy.get('#cmsinfo_block > :nth-child(2) > :nth-child(2) > .dark').should('exist');
        cy.get('#cmsinfo_block > :nth-child(2) > :nth-child(3)').should('exist');
        cy.get('#cmsinfo_block > :nth-child(2) > :nth-child(3)').should('exist');
        //Custom component
        cy.get('h1').should('exist');
        cy.get('#editorial_block_center > h2').should('exist');
        cy.get('.rte > p').should('exist');

        FOOTER_VALIDATION();
    });


    it('TC002 - Verify all elements of Contact Page', () => {

        HEADER_UNSIGNED_VALIDATION();

        cy.get('#contact-link > a').click();
        cy.get('.home').should('exist');
        cy.get('.breadcrumb').should('exist');
        cy.get('.navigation_page').should('exist');
        cy.get('.page-heading').should('exist');
        cy.get('fieldset').should('exist');
        cy.get('.page-subheading').should('exist');
        cy.get('.col-md-3 > :nth-child(1)').should('exist');
        cy.get('#id_contact').should('exist');
        cy.get(':nth-child(5) > label').should('exist');
        cy.get('#email').should('exist');
        cy.get(':nth-child(6) > label').should('exist');
        cy.get('#id_order').should('exist');
        cy.get(':nth-child(7) > label').should('exist');
        cy.get('#fileUpload').should('exist');
        cy.get('#message').should('exist');
        cy.get('#submitMessage > span').should('exist');

        FOOTER_VALIDATION();
    });

    it('Coming soon', () => {     });
    it('Coming soon', () => {     });
    it('Coming soon', () => {     });

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
