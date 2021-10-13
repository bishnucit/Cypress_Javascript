// sitefour.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


//Download the app from https://github.com/cypress-io/cypress-realworld-app

/// <reference types="cypress"/>


const testURL = 'http://localhost:3000';


const ONBOARDING = () => {
    cy.get('[data-test=user-onboarding-next]').click();
    cy.get('#bankaccount-bankName-input').clear().type('Tester')
    cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
    cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
    cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
    cy.get('[data-test="bankaccount-submit"]').click();
    cy.get('[data-test=user-onboarding-next]').click();
};

const LOGIN = () => {
    //login to app (remember to make a user with tester tester before runing automation)
    cy.get('#username').clear().type('tester');
    cy.get('#password').clear().type('tester');
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=sidenav-username]').should('be.visible');
};

function PARAM_LOGIN(username, password)
{
    //login to app (remember to make a user with tester tester before runing automation)
    cy.get('#username').clear().type(username);
    cy.get('#password').clear().type(password);
    cy.get('[data-test=signin-submit]').click();
    cy.get('[data-test=sidenav-username]').should('be.visible');
};

const LOGOUT = () => {
    //logout from app
    cy.get('[data-test=sidenav-signout]').should('be.visible');
    cy.get('[data-test=sidenav-signout]').click();
    cy.get('.MuiTypography-h5').should('have.text', 'Sign in');
};

const BODY = () => {
    //verify elements of static body of the website
    cy.get('[data-test=sidenav-username]').should('have.text','@tester');
    cy.get('[data-test=sidenav-user-balance]').should('have.text', '$0.00');
    cy.get('[data-test=sidenav-home]').should('exist');
    cy.get('[data-test=sidenav-user-settings]').should('exist');
    cy.get('[data-test=sidenav-bankaccounts]').should('exist');
    cy.get('[data-test=sidenav-notifications]').should('exist');
    cy.get('[data-test=sidenav-signout]').should('exist');
    cy.get('[data-test=sidenav-toggle]').should('exist');
    cy.get('[data-test=nav-top-new-transaction]').should('exist');
    cy.get('[data-test=nav-top-notifications-link]').should('exist');
    cy.get('[data-test=nav-public-tab]').should('exist');
    cy.get('[data-test=nav-contacts-tab]').should('exist');
    cy.get('[data-test=nav-personal-tab]').should('exist');
    cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
    cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
};

describe('Setting of test setup', () => {
    it('Setup the account 1 for automation testing',() => {
        cy.visit(testURL,{failOnStatusCode: false});
        cy.get('[data-test=signup]').click();
        cy.get('#firstName').clear().type('tester');
        cy.get('#lastName').clear().type('tester');
        cy.get('#username').clear().type('tester');
        cy.get('#password').clear().type('tester');
        cy.get('#confirmPassword').clear().type('tester');
        //onboarding login
        cy.get('[data-test=signup-submit]').click();
        cy.get('#username').clear().type('tester');
        cy.get('#password').clear().type('tester');
        cy.get('[data-test=signin-submit]').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        cy.get('[data-test=user-onboarding-dialog-title] > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next]').click();
        cy.get('[data-test=user-onboarding-dialog-title]').should('be.visible');
        cy.get('#bankaccount-bankName-input').clear().type('Tester')
        cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
        cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('Setup the account 2 for automation testing',() => {
        cy.visit(testURL,{failOnStatusCode: false});
        cy.get('[data-test=signup]').click();
        cy.get('#firstName').clear().type('tester1');
        cy.get('#lastName').clear().type('tester1');
        cy.get('#username').clear().type('tester1');
        cy.get('#password').clear().type('tester1');
        cy.get('#confirmPassword').clear().type('tester1');
        //onboarding login
        cy.get('[data-test=signup-submit]').click();
        cy.get('#username').clear().type('tester1');
        cy.get('#password').clear().type('tester1');
        cy.get('[data-test=signin-submit]').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        cy.get('[data-test=user-onboarding-dialog-title] > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next]').click();
        cy.get('[data-test=user-onboarding-dialog-title]').should('be.visible');
        cy.get('#bankaccount-bankName-input').clear().type('Tester1')
        cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
        cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        //logout
        LOGOUT();
    });
});

describe('Scenario 1 - Verify all the elements of the websites are existing', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Sign in page - Verify elements of sign in page', () => {
        //verify elements
        cy.get('.makeStyles-logo-3').should('exist');
        cy.get('.MuiTypography-h5').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('.MuiFormControlLabel-root > .MuiTypography-root').should('exist');
        cy.get('.PrivateSwitchBase-input-14').should('exist');
        cy.get('[data-test=signup]').should('exist');
        cy.get('[data-test="signin-submit"]').should('exist');
        //login with an existing account and then logout
        LOGIN();
        LOGOUT();
    });


    it('TC002 - Sign up page - Verify elements of sign up page', () => {
        cy.get('[data-test=signup]').click();
        //verify elements
        cy.get('#firstName').should('exist');
        cy.get('#lastName').should('exist');
        cy.get('#username').should('exist');
        cy.get('#password').should('exist');
        cy.get('#confirmPassword').should('exist');
        cy.get('[data-test=signup-submit]').should('exist');
        //login after sign up to verify sign up is working
        var d = new Date();
        var n = d.getTime();
        cy.get('#firstName').clear().type('tester'+n);
        cy.get('#lastName').clear().type('tester'+n);
        cy.get('#username').clear().type('tester'+n);
        cy.get('#password').clear().type('tester'+n);
        cy.get('#confirmPassword').clear().type('tester'+n);
        //onboarding login
        cy.get('[data-test=signup-submit]').click();
        cy.get('#username').clear().type('tester'+n);
        cy.get('#password').clear().type('tester'+n);
        cy.get('[data-test=signin-submit]').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        cy.get('[data-test=user-onboarding-dialog-title] > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next]').click();
        cy.get('[data-test=user-onboarding-dialog-title]').should('be.visible');
        cy.get('#bankaccount-bankName-input').clear().type('Tester')
        cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').should('be.disabled');
        cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('.MuiBox-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-onboarding-next] > .MuiButton-label').click();
        cy.get('[data-test=sidenav-username]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC003 - Home page - Verify elements of Home page', () => {
        //login
        LOGIN();
        BODY();
        //logout
        LOGOUT();
    });

    it('TC004 - Contacts page - Verify elements of Contacts page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-contacts-tab]').click();
        cy.contains('Contacts').should('be.visible');
        cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
        cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
        cy.get('[data-test=transaction-list-empty-create-transaction-button]').should('exist');
        cy.get('.MuiGrid-container > :nth-child(1) > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC005 - Mine page - Verify elements of Personal page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-personal-tab]').click();
        cy.contains('Personal').should('be.visible');
        cy.get('[data-test=transaction-list-filter-date-range-button]').should('exist');
        cy.get('[data-test=transaction-list-filter-amount-range-button]').should('exist');
        cy.get('[data-test=transaction-list-empty-create-transaction-button]').should('exist');
        cy.get('.MuiGrid-container > :nth-child(1) > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC006 - New Transaction page - Verify elements of New Transaction page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=nav-top-new-transaction]').click();
        cy.get('.MuiStepper-root > :nth-child(1)').should('exist');
        cy.get('.MuiStepper-root > :nth-child(3)').should('exist');
        cy.get('.MuiStepper-root > :nth-child(5)').should('exist');
        cy.get('[data-test=user-list-search-input]').should('exist');
        cy.get('[data-test=user-list-item-t45AiwidW]').should('be.visible');
        cy.get('[data-test=user-list-item-qywYp6hS0U]').should('be.visible');
        cy.get('[data-test=user-list-item-bDjUb4ir5O]').should('be.visible');
        cy.get('[data-test=user-list-item-24VniajY1y]').should('be.visible');
        cy.get('[data-test=user-list-item-tsHF6_D5oQ]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC007 - Notifications page - Verify elements of Notification page', () => {

        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-notifications]').click();
        cy.get('.MuiGrid-grid-xs-12 > .MuiPaper-root > :nth-child(1)').should('have.text', 'Notifications');
        cy.get('[data-test=empty-list-header]').should('have.text', 'No Notifications');
        cy.get('[data-test=empty-list-children] > svg').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC008 - My Accounts page - Verify elements of My Accounts page', () => {

        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-user-settings]').click();
        cy.get('.MuiPaper-root > .MuiTypography-root').should('have.text', 'User Settings');
        cy.get('.MuiPaper-root > .MuiTypography-root').should('be.visible');
        cy.get('[data-test=user-settings-firstName-input]').should('exist');
        cy.get('[data-test=user-settings-lastName-input]').should('exist');
        cy.get('[data-test=user-settings-email-input]').should('exist');
        cy.get('[data-test=user-settings-phoneNumber-input]').should('exist');
        //three types of getting value from element
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-firstName-input]').value;
            expect(value).to.equal('tester');
        });
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-lastName-input]').value;
            expect(value).to.equal('tester');
        });

        cy.get('[data-test=user-settings-email-input]').should(($input) => {
            const value = $input.val();
            expect(value).to.equal('');
        });

        cy.get('[data-test=user-settings-phoneNumber-input]').invoke('val').should((value) => {
            expect(value).to.equal('');
        });
        //logout
        LOGOUT();
    });

    it('TC009 - Bank Accounts page - Verify elements of Bank Accounts page', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-bankaccounts]').click();
        cy.get('.MuiGrid-grid-xs-12 > .MuiPaper-root > .MuiGrid-align-items-xs-center > :nth-child(1) > .MuiTypography-root').should('exist');
        cy.get('[data-test=bankaccount-new]').should('exist');
        cy.get('[data-test=bankaccount-delete]').should('exist');
        //logout
        LOGOUT();
    });
});

describe('Scenario 2 - View first two transactions on Home page and comment and like on the transaction', () => {

    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Verify two comments are existing', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-item-4AvM8cN1DdS]').should('be.visible');
        cy.get('[data-test=transaction-item-Ke0eaLoOG8Dg]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC002 - Comment and like first comment', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-sender-4AvM8cN1DdS]').click({force: true});
        //like
        cy.get('[data-test=transaction-like-button-4AvM8cN1DdS]').click({force: true});
        //comment
        //cy.scrollTo('top');
        cy.get('[data-test=transaction-comment-input-4AvM8cN1DdS]').type('hello').type('{enter}');
        //logout
        LOGOUT();
    });

    it('TC003 - Comment and like second comment', () => {
        //login
        LOGIN();
        //verify static elements of body
        BODY();
        cy.get('[data-test=sidenav-home]').click();
        cy.get('[data-test=transaction-sender-mEYl_ZSc5Qqe]').click({force: true});
        //like
        cy.get('[data-test=transaction-like-button-mEYl_ZSc5Qqe]').click({force: true});
        //comment
        //cy.scrollTo('top');
        cy.get('[data-test=transaction-comment-input-mEYl_ZSc5Qqe]').type('hello').type('{enter}');
        //logout
        LOGOUT();
    });

});

describe('Scenario 3 - View transaction from $0 t0 $500 range on Home page', () => {
    context('Using local storage',  () => {
        before(() => {
            cy.login_sitefour();
            cy.saveLocalStorage();
        });

        it('TC001 - Select $0 to $500 transaction in slider', () => {
            //restoring local storage to avoid login every time (reduces login timing)
            cy.restoreLocalStorage();
            cy.visit(testURL)
            //body check
            BODY();
            cy.get('[data-test=sidenav-home]').click();
            cy.get('[data-test=transaction-list-filter-amount-range-button]').click({force: true});
            cy.get('[data-test=transaction-list-filter-amount-range-slider]').invoke('val', '1').trigger('change').click();
            cy.get('[data-test=transaction-sender-4AvM8cN1DdS]').click({force: true});
            cy.get('[data-test=transaction-detail-header]').should('have.text', 'Transaction Detail');
            cy.get('[data-test=transaction-amount-4AvM8cN1DdS]').should('have.text', '-$190.85');
        });

        it('TC002 - Select transactions for the month of september in date picker', () => {
            cy.restoreLocalStorage();
            cy.visit(testURL);
            ONBOARDING();
            //body check
            BODY();
            cy.get('[data-test=transaction-list-filter-date-range-button]').click({force:true});
            cy.get('[data-date="2021-09-02"]').click();
            cy.wait(500);
            cy.get('[data-date="2021-09-30"]').click();
            cy.wait(500);
            cy.get('[data-test=empty-list-header]').should('have.text', 'No Transactions');
            //logout
            LOGOUT();
        });
    });
});

describe('Scenario 4 - Create a new bank account after login and delete the account', () => {
    context('Using local storage',  () => {
        before(() => {
            cy.login_sitefour();
            cy.saveLocalStorage();
        });

        it('TC001 - Create a new bank account after login and delete after creating immediately', () => {
            //restoring local storage to avoid login every time (reduces login timing)
            cy.restoreLocalStorage();
            cy.visit(testURL)
            //body check
            BODY();
            cy.get('[data-test=sidenav-bankaccounts]').click({force:true});
            cy.get('[data-test=bankaccount-new]').should('be.visible');
            cy.get('[data-test=bankaccount-new]').click({force:true});
            cy.contains('Create Bank Account').should('be.visible');
            cy.contains('Create Bank Account').click({force:true});
            //create account
            cy.get('#bankaccount-bankName-input').clear().type('test123456');
            cy.get('#bankaccount-routingNumber-input').clear().type('123456789');
            cy.get('#bankaccount-accountNumber-input').clear().type('123456789');
            cy.get('[data-test=bankaccount-submit]').click({force:true});
            //delete account
            cy.contains('test123456').should('be.visible');
            cy.wait(3000);
            cy.get('.MuiButton-label').last().click({force:true});
            cy.contains('test123456 (Deleted)').should('be.visible');
            //logout
            LOGOUT();
        });
    });
});

describe('Scenario 5 - Edit name, phone number, email in user settings and make 5 transactions(request, pay) with 5 friends', () => {
    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
        //login
        LOGIN();
        //verify static elements of body
        BODY();
    });

    it('TC001 - Navigate to My Account page and edit name, phone and email', () => {
        //add details
        cy.get('[data-test=sidenav-user-settings]').click({force:true});
        cy.get('[data-test=user-settings-firstName-input]').should('exist').clear().type('tester');
        cy.get('[data-test=user-settings-lastName-input]').should('exist').clear().type('tester');
        cy.get('[data-test=user-settings-email-input]').should('exist').clear().type('test123_gr@mailinator.com');
        cy.get('[data-test=user-settings-phoneNumber-input]').should('exist').clear().type('0123456789');
        cy.get('[data-test=user-settings-submit]').should('be.enabled').click({force:true});
        cy.wait(3000);
        //verify details
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=sidenav-user-settings]').click({force:true});
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-firstName-input]').value;
            expect(value).to.equal('tester');
        });
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-lastName-input]').value;
            expect(value).to.equal('tester');
        });
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-email-input]').value;
            expect(value).to.equal('test123_gr@mailinator.com');
        });
        cy.document().then((doc) => {
            const value = doc.querySelector('[data-test=user-settings-phoneNumber-input]').value;
            expect(value).to.equal('0123456789');
        });
        //logout
        LOGOUT();
    });

    it('TC002 - Navigate to New transaction page, search 5 users and request for money', () => {
        //make transactions
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        //user 1 transaction
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Edgar');
        cy.get('[data-test=user-list-item-t45AiwidW]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 2 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Arely');
        cy.get('[data-test=user-list-item-qywYp6hS0U]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 3 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Kaylin');
        cy.get('[data-test=user-list-item-bDjUb4ir5O]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 4 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Ibrahim');
        cy.get('[data-test=user-list-item-24VniajY1y]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 5 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Devon');
        cy.get('[data-test=user-list-item-tsHF6_D5oQ]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //verify transactions
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-personal-tab]').click({force:true});
        cy.contains('Devon').should('exist');
        cy.contains('Ibrahim').should('exist');
        cy.contains('Kaylin').should('exist');
        cy.contains('Arely').should('exist');
        cy.contains('Edgar').should('exist');
        //logout
        LOGOUT();
    });

    it('TC003 - Navigate to New transaction page, search 5 users and pay money', () => {
        //make transactions
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        //user 1 transaction
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Edgar');
        cy.get('[data-test=user-list-item-t45AiwidW]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 2 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Arely');
        cy.get('[data-test=user-list-item-qywYp6hS0U]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 3 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Kaylin');
        cy.get('[data-test=user-list-item-bDjUb4ir5O]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 4 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Ibrahim');
        cy.get('[data-test=user-list-item-24VniajY1y]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //user 5 transaction
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('Devon');
        cy.get('[data-test=user-list-item-tsHF6_D5oQ]').click({force:true});
        cy.get('[data-test=transaction-create-submit-request]').should('be.disabled');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.disabled');
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('This is a note');
        cy.get('[data-test=transaction-create-submit-payment]').should('be.enabled').click({force:true});
        cy.get('[data-test=new-transaction-create-another-transaction]').should('be.visible');
        //verify transactions
        cy.get('[data-test=sidenav-home]').click({force:true});
        cy.get('[data-test=nav-personal-tab]').click({force:true});
        cy.contains('Devon').should('exist');
        cy.contains('Ibrahim').should('exist');
        cy.contains('Kaylin').should('exist');
        cy.contains('Arely').should('exist');
        cy.contains('Edgar').should('exist');
        //logout
        LOGOUT();
    });
});


describe('Scenario 6 - Create a new user, logout, login with old user and Make a new transaction (Request money) from Home page. Login as new user and accept request from old user in Personal page.'
+'Check the balance of the new and old user, should be updated.Verify notification is updated.', () => {
    beforeEach(() => {
        cy.visit(testURL,{failOnStatusCode: false});
    });

    it('TC001 - Login with a new user and then logout', () => {
        //login
        PARAM_LOGIN("tester1","tester1");
        cy.get('[data-test=sidenav-user-balance]').invoke('text').then(text => +text.replace('$','').replace('.','')).should('be.lessThan', 1);
        //logout
        LOGOUT();
    });

    it('TC002 - Login with another user and make a transaction with new user', () => {
        //login
        PARAM_LOGIN("tester","tester");
        //cy.get('[data-test=sidenav-user-balance]').invoke('text').then(text => +text.replace('$','').replace('.','')).should('be.lessThan', 1);
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('tester1');
        cy.wait(3000);
        cy.contains('tester1').first().click({force:true});
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('Request 50 dollar');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        //logout
        LOGOUT();
    });

    it('TC003 - Accept the request from the old user', () => {
        //login
        PARAM_LOGIN("tester1","tester1");
        cy.get('[data-test=nav-personal-tab]').click({force:true});
        cy.contains('tester tester').first().click({force:true});
        cy.wait(2000);
        cy.get('.MuiButton-label').eq(1).click({force:true});
        cy.wait(2000);
        cy.contains('charged').should('be.visible');
        //verify notifications
        cy.get('[data-test=nav-top-notifications-link]').click({force:true});
        cy.get('[data-test=notifications-list]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC004 - Verify the old user account is having approved money from other user', () => {
        //login
        PARAM_LOGIN("tester","tester");
        //verify balance to be greater than 1
        cy.get('[data-test=sidenav-user-balance]').invoke('text').then(text => +text.replace('$','').replace('.','')).should('be.greaterThan', 1);
        //logout
        LOGOUT();
    });

    it('TC005 - Verify both user accounts have active notifications that comes after a transaction is approved or declined', () => {
        //login user1
        PARAM_LOGIN("tester","tester");
        cy.wait(2000);
        //verify balance to be greater than 1
        cy.get('[data-test=nav-top-notifications-link]').invoke('text').then(text => +text).should('be.greaterThan', 0);
        //logout
        LOGOUT();
        //login user2
        PARAM_LOGIN("tester1","tester1");
        cy.wait(2000);
        //verify balance to be greater than 1
        cy.get('[data-test=nav-top-notifications-link]').invoke('text').then(text => +text).should('be.greaterThan', 0);
        //logout
        LOGOUT();
    });


    it('TC006 - Login with another user and make a transaction with new user', () => {
        //login
        PARAM_LOGIN("tester","tester");
        //cy.get('[data-test=sidenav-user-balance]').invoke('text').then(text => +text.replace('$','').replace('.','')).should('be.lessThan', 1);
        cy.get('[data-test=nav-top-new-transaction]').click({force:true});
        cy.get('[data-test=user-list-search-input]').click({force:true}).clear().type('tester1');
        cy.wait(3000);
        cy.contains('tester1').first().click({force:true});
        cy.get('#amount').click({force:true}).clear().type('50');
        cy.get('#transaction-create-description-input').click({force:true}).clear().type('Request 50 dollar');
        cy.get('[data-test=transaction-create-submit-request]').should('be.enabled').click({force:true});
        //logout
        LOGOUT();
    });

    it('TC007 - Decline the request from the old user', () => {
        //login
        PARAM_LOGIN("tester1","tester1");
        cy.get('[data-test=nav-personal-tab]').click({force:true});
        cy.contains('tester tester').first().click({force:true});
        cy.wait(2000);
        cy.get('.MuiButton-label').eq(2).click({force:true});
        cy.wait(2000);
        //cy.contains('charged').should('be.visible');
        //verify notifications
        cy.get('[data-test=nav-top-notifications-link]').click({force:true});
        cy.get('[data-test=notifications-list]').should('be.visible');
        //logout
        LOGOUT();
    });

    it('TC008 - Verify the old user account is having approved money from other user', () => {
        //login
        PARAM_LOGIN("tester","tester");
        //verify balance to be greater than 1
        cy.get('[data-test=sidenav-user-balance]').invoke('text').then(text => +text.replace('$','').replace('.','')).should('be.greaterThan', 1);
        //logout
        LOGOUT();
    });

    it('TC009 - Verify both user accounts have active notifications that comes after a transaction is approved or declined', () => {
        //login user1
        PARAM_LOGIN("tester","tester");
        cy.wait(2000);
        //verify balance to be greater than 1
        cy.get('[data-test=nav-top-notifications-link]').invoke('text').then(text => +text).should('be.greaterThan', 0);
        //logout
        LOGOUT();
        //login user2
        PARAM_LOGIN("tester1","tester1");
        cy.wait(2000);
        //verify balance to be greater than 1
        cy.get('[data-test=nav-top-notifications-link]').invoke('text').then(text => +text).should('be.greaterThan', 0);
        //logout
        LOGOUT();
    });
});
