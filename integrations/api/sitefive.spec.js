// sitefive.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//API DOC - https://restful-booker.herokuapp.com/apidoc/index.html

//reference for assertions
//https://docs.cypress.io/guides/references/assertions#TDD-Assertions

//All Pass - https://prnt.sc/1x5mbtj

describe('Scenario 1 - Verify all endpoints ', () => {

    it('TC001 - Verify all valid endpoints are giving a 200 response', () => {

        var current_token;
        var current_bookingid;
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
            current_token = response.body.token;
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
            url: 'https://restful-booker.herokuapp.com/booking/3',
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
            expect(response.body.additionalneeds).to.be.a('string');
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
            current_bookingid = response.body.bookingid;
            cy.wrap(current_bookingid).as('current_bookingid');
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
        cy.get('@current_bookingid').then(current_bookingid => {
            cy.request({
                method: 'PUT',
                url: `https://restful-booker.herokuapp.com/booking/${current_bookingid}`,
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
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Cookie': 'token=' + current_token
                        }
                }).then(function(response){
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');
                expect(response.body).to.not.be.null;
            });
        });

        //partial update booking
        cy.get('@current_bookingid').then(current_bookingid => {
            cy.request({
                method: 'PATCH',
                url: `https://restful-booker.herokuapp.com/booking/${current_bookingid}`,
                body: {
                        "firstname" : "James1",
                        "lastname" : "Brown",
                    },
                headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json',
                        'Cookie': 'token='+current_token
                        }
                }).then(function(response){
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');
                expect(response.body).to.not.be.null;
            });
        });

        //delete booking
        cy.get('@current_bookingid').then(current_bookingid => {
            cy.request({
                method: 'DELETE',
                url: `https://restful-booker.herokuapp.com/booking/${current_bookingid}`,
                headers: {
                        'content-type': 'application/JSON',
                        'Cookie': 'token='+current_token
                        }
                }).then(function(response){
                expect(response.status).to.eq(201);
                expect(response).to.have.property('headers');
                expect(response).to.have.property('duration');
                expect(response.body).to.not.be.null;
            });
        });
    });

    it('TC002 - Verify all endpoints with a error input is giving error response', () => {
        //create token with invalid credentials
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            failOnStatusCode: false,
            body: {
                    'username':true,
                    'password':false
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
        }).then(function(response){
            var current_token = response.body.token;
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).have.property('reason', 'Bad credentials');
        });
        //wrong endpoint must throw 404 error
        cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth/1',
            body: {
                    'username':true,
                    'password':false
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
        }).then(function(response){
            expect(response.status).to.eq(404);
        });

        //get booking id
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking_abc',
            }).then(function(response){
            expect(response.status).to.eq(404);
        });

        //get booking
        cy.request({
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/abc',
            }).then(function(response){
            expect(response.status).to.eq(404);
        });

        //create booking
        cy.request({
            failOnStatusCode: false,
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking_21',
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
            expect(response.status).to.eq(404);
        });

        //update booking
        cy.request({
            failOnStatusCode: false,
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/abcd',
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
                    'Cookie': 'token=fake_token'
                    }
            }).then(function(response){
            expect(response.status).to.eq(403);
        });

        //partial update booking
        cy.request({
            failOnStatusCode: false,
            method: 'PATCH',
            url: 'https://restful-booker.herokuapp.com/booking/abcd',
            body: {
                    "firstname" : "James1",
                    "lastname" : "Brown",
                  },
            headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': 'token=aad354e9dffe538'
                    }
            }).then(function(response){
            expect(response.status).to.eq(403);
        });

        //delete booking
        cy.request({
            failOnStatusCode: false,
            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/abcd',
            headers: {
                    'content-type': 'application/JSON',
                    'Cookie': 'token=aad354e9dffe538'
                    }
            }).then(function(response){
            expect(response.status).to.eq(403);
        });
    });
});

describe('Scenario 2 - Health check, create token and CREATE, GET the new booking ', () => {

    var booking_id;

    it('TC001 - Health check the URL under test', () => {

        //Health check
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/ping',
        }).then(function(response){
            //cy.log(response);
            expect(response.status).to.eq(201);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });
    });

    it('TC002 - Create a token for POST/DELETE booking', () => {

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
            //cy.log(response);
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).have.property('token');
            expect('token').to.be.a('string');
        });
    });

    it('TC003 - Create a new booking', () => {

        //create booking
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                    "firstname" : "Jack",
                    "lastname" : "Daniels",
                    "totalprice" : 500,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2021-10-10",
                        "checkout" : "2021-11-11"
                    },
                    "additionalneeds" : "Breakfast"
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
            }).then(function(response){
            booking_id = response.body.bookingid;
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
    });

    it('TC004 - Get the created booking', () => {

        //get booking
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/'+ booking_id,
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
    });
});

describe('Scenario 3 - Create a token, get an existing booking and partial update booking', () => {

    var current_token;

    it('TCOO1 - Create a token for POST/DELETE booking', () => {

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
            current_token = response.body.token;
            //cy.log(response);
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
            expect(response.body).have.property('token');
            expect('token').to.be.a('string');
        });
    });

    it('TC002 - Get the created booking', () => {
    //get booking
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/6',
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
    });

    it('TC003 - Partially update the existing booking', () => {

        //partial update booking
        cy.request({
            method: 'PATCH',
            url: 'https://restful-booker.herokuapp.com/booking/6',
            body: {
                    "firstname" : "James1",
                    "lastname" : "Brown",
                  },
            headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                    'Cookie': 'token='+current_token
                    }
            }).then(function(response){
            expect(response.status).to.eq(200);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });
    });
});

describe('Scenario 4 - Create a token, get an existing booking and delete booking', () => {

    //to run below api test cases follow the below steps-
    //1. get token by running the create token endpoint (do this separately or by commenting other tests)
    //2. replace the returned token from auth endpoint in update/delete test cases where token=somevalue
    //3. then run all test cases it would run fine.
    var current_token;
    var current_bookingid;

    it('TCOO1 - Create a token for POST/DELETE booking', () => {


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
            current_token = response.body.token;
            expect('token').to.be.a('string');
        });
    });

    it('TC002 - Get the existing booking', ()=> {

        //create booking
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                    "firstname" : "Nasda",
                    "lastname" : "Sentonin",
                    "totalprice" : 300,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2021-11-01",
                        "checkout" : "2022-01-01"
                    },
                    "additionalneeds" : "Lunch"
                  },
            headers: {
                    'content-type': 'application/JSON'
                    }
            }).then(function(response){
            current_bookingid = response.body.bookingid;
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
    });

    it('TC003 - Delete the existing booking', ()=> {
        //delete booking
        cy.request({
            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/'+current_bookingid,
            headers: {
                    'content-type': 'application/JSON',
                    'Cookie': 'token='+current_token
                    }
            }).then(function(response){
            expect(response.status).to.eq(201);
            expect(response).to.have.property('headers');
            expect(response).to.have.property('duration');
            expect(response.body).to.not.be.null;
        });
    });
});
