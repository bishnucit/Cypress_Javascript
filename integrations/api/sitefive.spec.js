// sitefive.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//reference for assertions
//https://docs.cypress.io/guides/references/assertions#TDD-Assertions

describe('Scenario 1 - Verify all endpoints ', () => {

   it('TC001 - Verify all valid endpoints are giving a 200 response', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                    'username':'admin',
                    'password':'password123'
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
        }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).have.property('token');
            expect('token').to.be.a('string');
        });
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).to.be.a('array');
        });
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).have.property('bookingdates');
            expect(response.body).have.property('depositpaid');
            expect(response.body).have.property('firstname');
            expect(response.body).have.property('lastname');
            expect(response.body).have.property('totalprice');
            expect('firstname').to.be.a('string');
            expect('lastname').to.be.a('string');
        });
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });
    });
});
