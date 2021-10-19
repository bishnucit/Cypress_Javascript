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

        //create token
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

        //get booking id
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

        //get booking
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
            expect(response.body.totalprice).to.be.a('number');
            expect(response.body.depositpaid).to.be.a('boolean');
            expect(response.body.bookingdates).to.be.a('object');
            //expect(response.body.additionalneeds).to.be.a('string');
        });

        //create booking
        cy.request({
            method: 'POST',
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
            expect(response.body).have.property('booking');
            expect(response.body.bookingid).to.be.a('number');
            expect(response.body.booking).have.property('firstname');
            expect(response.body.booking.firstname).to.be.a('string');
            expect(response.body.booking).have.property('lastname');
            expect(response.body.booking.lastname).to.be.a('string');
            expect(response.body.booking).have.property('totalprice');
            expect(response.body.booking.totalprice).to.be.a('number');
            expect(response.body.booking).have.property('depositpaid');
            expect(response.body.booking.depositpaid).to.be.a('boolean');
            expect(response.body.booking).have.property('additionalneeds');
            expect(response.body.booking.additionalneeds).to.be.a('string');
            expect(response.body.booking.bookingdates).have.property('checkin');
            expect(response.body.booking.bookingdates.checkin).to.be.a('string');
            expect(response.body.booking.bookingdates).have.property('checkout');
            expect(response.body.booking.bookingdates.checkout).to.be.a('string');

        });

        //update booking
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            body: {
                    "firstname" : "James",
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
                    'content-type': 'application/JSON',
                    'Accept': 'application/json',
                    'Cookie': 'token=fbe4297cd7cb18a'
                    }
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;

        });

        //partial update booking
        cy.request({
            method: 'PATCH',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            body: {
                    "firstname" : "James1",
                    "lastname" : "Brown",
                  },
            headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': 'token=fbe4297cd7cb18a'
                    }
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });

        //delete booking
        cy.request({
            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/2',
            headers: {
                    'content-type': 'application/JSON',
                    'Cookie': 'token=fbe4297cd7cb18a'
                    }
            }).then(function(response){
            expect(response.status).to.eq(201);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });
    });
});
