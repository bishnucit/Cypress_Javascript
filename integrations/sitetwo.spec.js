/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>

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

        it('TC015 - Verify the contents of the table and verify all edit/delete buttons are working', () => {
            cy.contains('Lorem').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Iuvaret' + i).should('be.visible');
            }
            cy.contains('Ipsum').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Apeirian' + i).should('be.visible');
            }
            cy.contains('Dolor').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Adipisci' + i).should('be.visible');
            }
            cy.contains('Sit').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Definiebas' + i).should('be.visible');
            }
            cy.contains('Amet').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Consequuntur' + i).should('be.visible');
            }
            cy.contains('Diceret').should('be.visible');
            for(let i=0;i<10;i++){
                cy.contains('Phaedrum' + i).should('be.visible');
            }

            for(let i=1;i<10;i++){
                cy.get(':nth-child(' + i +') > :nth-child(7) > [href="#edit"]').click();
                cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/challenging_dom#edit')
                });

                cy.get(':nth-child(' + i +') > :nth-child(7) > [href="#delete"]').click();
                cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/challenging_dom#delete')
                });
            }
        });
    });

    context('Page 6 - Checkboxes page testing', () => {
        beforeEach(() => {
          cy.contains('Checkboxes').click();
          cy.get('.example').should('exist');
          });

        it('TC016 - Verify the contents of the table and verify all edit/delete buttons are working', () => {
              cy.get('#checkboxes > :nth-child(1)').should('not.be.checked')
              cy.get('#checkboxes > :nth-child(3)').should('be.checked')
          });

        it('TC017 - Verify if checkbox is unchecked, check it and vice versa', () => {
            cy.get('#checkboxes > :nth-child(1)').then(($chk) => {
                if($chk.find('checked')) {
                    cy.get('#checkboxes > :nth-child(1)').check();
                }else{
                    cy.get('#checkboxes > :nth-child(1)').uncheck();
                }
            });

            cy.get('#checkboxes > :nth-child(3)').then(($chk) => {
                if($chk.find('checked')) {
                    cy.get('#checkboxes > :nth-child(3)').uncheck();
                }else{
                    cy.get('#checkboxes > :nth-child(3)').check();
                }
            });
        });
    });


    context('Page 9 - Disappearing Elements page check', () => {
        beforeEach(() => {
            cy.contains('Disappearing Elements').click();
            cy.get('.example').should('exist');
            });

        it('TC016 - Verify all the elements are visible and existing', () => {
            cy.contains('Home').should('exist');
            cy.contains('About').should('exist');
            cy.contains('Contact Us').should('exist');
            cy.contains('Portfolio').should('exist');
            cy.contains('Gallery',{ timeout: 10000 }).should('exist');
        });

        it('TC017 - Verify on clicking Home button redirects to proper page', () => {
            cy.contains('Home').click();
            cy.location().should((loc) => {
            expect(loc.href).to.eq('http://the-internet.herokuapp.com/')
            });
        });
        it('TC018 - Verify on clicking About button redirects to proper page', () => {
            cy.contains('About').click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/about/')
                });
        });
        it('TC019 - Verify on clicking Contact us button redirects to proper page', () => {
            cy.contains('Contact Us').click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/contact-us/')
                });
        });
        it('TC020 - Verify on clicking Portfolio button redirects to proper page', () => {
            cy.contains('Portfolio').click();
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/portfolio/')
                });
        });
        it('TC021 - Verify on clicking Gallery button redirects to proper page', () => {
            cy.contains('Gallery').click({force:true});
            cy.location().should((loc) => {
                expect(loc.href).to.eq('http://the-internet.herokuapp.com/gallery/')
                });
        });
    });

    context('Page 10 - Drag and Drop page check', () => {
        beforeEach(() => {
            cy.contains('Drag and Drop').click();
            cy.get('.example').should('exist');
            });

        it('TC022 - Drag from one box to another', () => {
            //using command
            cy.get("#column-a").dragTo("#column-b");
            cy.screenshot('TC022_drag1.jpg');
            cy.get('h3').click({force:true});
            cy.get("#column-b").dragTo("#column-a");
            cy.screenshot('TC022_drag2.jpg');
        });

        it('TC023 - Drag from one box to another using direct code', () => {
            cy.get('#column-a').trigger('dragstart');
            cy.get('#column-b').trigger('dragenter', { force: true });
            cy.get('#column-b').trigger('drop', { force: true });
        });
    });

    context('Page 12 - Dynamic Content page check', () => {
        beforeEach(() => {
            cy.contains('Dynamic Content').click();
            cy.get('.row').should('exist');
            });

        it('TC024 - Verify 3 image and 3 desc are visible', () => {
            cy.get(':nth-child(1) > .large-2 > img').should('exist');
            cy.get(':nth-child(1) > .large-10').should('exist');
            cy.get(':nth-child(4) > .large-2 > img').should('exist');
            cy.get(':nth-child(4) > .large-10').should('exist');
            cy.get(':nth-child(7) > .large-2 > img').should('exist');
            cy.get('#content > :nth-child(7) > .large-10').should('exist');
        });

        it('TC025 - verify that the last desc doesnot match after link revisted', () => {
            cy.get('#content > :nth-child(7) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.get(':nth-child(3) > a').click();
                cy.get('#content > :nth-child(7) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });

        it('TC026 - verify that the last desc doesnot match after page refresh', () => {
            cy.get('#content > :nth-child(7) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.reload();
                cy.get('#content > :nth-child(7) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });


        it('TC027 - verify that the first desc doesnot match after link revisted', () => {
            cy.get('#content > :nth-child(1) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.get(':nth-child(3) > a').click();
                cy.get('#content > :nth-child(1) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });

        it('TC028 - verify that the first desc doesnot match after page refresh', () => {
            cy.get('#content > :nth-child(1) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.reload();
                cy.get('#content > :nth-child(1) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });

        it('TC029 - verify that the middle desc doesnot match after link revisted', () => {
            cy.get('#content > :nth-child(4) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.get(':nth-child(3) > a').click();
                cy.get('#content > :nth-child(4) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });

        it('TC030 - verify that the middle desc doesnot match after page refresh', () => {
            cy.get('#content > :nth-child(4) > .large-10').then(($desc) =>{
                const txt = $desc.text();
                cy.reload();
                cy.get('#content > :nth-child(4) > .large-10').should(($desc2) => {
                    expect($desc2.text()).not.to.eq(txt);
                });
            });
        });
    });

    context('Page 13 - Dynamic Controls page check', () => {
        beforeEach(() => {
            cy.contains('Dynamic Controls').click();
            cy.get('.example').should('exist');
            cy.get('p').should('exist');
            });

        it('TC031 - Verify all elements are visible', () => {
            cy.get('.example > :nth-child(3)').should('exist');
            cy.get('#checkbox').should('exist');
            cy.get('#checkbox-example > button').should('exist');
            cy.get('.example > :nth-child(8)').should('exist');
            cy.get('#input-example > input').should('exist');
            cy.get('#input-example > button').should('exist');
        });

        it('TC032 - verify dynamic controls of checkbox', () => {
            cy.get('#checkbox > input').should('not.be.checked');
            cy.get('#checkbox-example > button').click();
            cy.waitForLoader();
            cy.get('#checkbox > input').should('not.exist');
            cy.get('#message').should('have.text', "It's gone!");
            cy.get('#checkbox-example > button').click();
            cy.waitForLoader();
            cy.get('#message').should('have.text', "It's back!");
            cy.get('#checkbox').should('exist');
        });

        it('TC033 - verify dynamic controls of textbox', () => {
            cy.get('#input-example > input').should('not.be.enabled');
            cy.get('#input-example > button').click();
            cy.waitForLoader();
            cy.get('#input-example > input').should('be.enabled');
            cy.get('#message').should('have.text', "It's enabled!");
            cy.get('#input-example > input').type('Hello');
            cy.get('#input-example > button').click();
            cy.waitForLoader();
            cy.get('#message').should('have.text', "It's disabled!");
            cy.get('#input-example > input').should('not.be.enabled');
        });
    });


    context('Page 14 - Dynamic Controls page check', () => {
        beforeEach(() => {
            cy.contains('Dynamic Loading').click();
            cy.get('.example').should('exist');
            cy.get('p').should('exist');
            cy.get('[href="/dynamic_loading/1"]').should('exist');
            cy.get('[href="/dynamic_loading/2"]').should('exist');
            });

        it('TC034 - Verify element hidden page', () => {
            cy.get('[href="/dynamic_loading/1"]').click();
            cy.wait(2000);
            cy.get('#content > div > h3').should('be.visible');
            cy.get('#content > div > h4').should('be.visible');

            cy.get('button').should('exist');
            cy.get('#finish > h4').should('not.be.visible');
            cy.get('button').click();
            cy.waitForLoader();
            cy.wait(5000);
            cy.get('#finish > h4').should('be.visible');
        });

        it('TC035 - verify render after click', () => {
            cy.get('[href="/dynamic_loading/2"]').click();
            cy.wait(2000);
            cy.get('#content > div > h3').should('be.visible');
            cy.get('#content > div > h4').should('be.visible');

            cy.get('button').should('exist');
            cy.get('#finish > h4').should('not.exist');
            cy.get('button').click();
            cy.waitForLoader();
            cy.wait(5000);
            cy.get('#finish > h4').should('be.visible');
        });
    });

    context('Page 15 - Entry Ad page check', () => {
        beforeEach(() => {
            cy.contains('Entry Ad').click();
            cy.get('.example').should('exist');
            cy.get('.modal > .modal-title > h3').should('exist');
            });

        it('TC036 - Verify modal ad page', () => {
            cy.get('.modal > .modal-title > h3').should('exist');
            cy.get('.modal-footer > p').should('exist');
            cy.get('.modal-footer > p').click();
            cy.get('.example > h3').should('have.text', 'Entry Ad');
            cy.get('.example > p:first').should('have.text', 'Displays an ad on page load.');

        });

        it('TC037 - verify modal after click', () => {
            cy.get('.modal > .modal-title > h3').should('exist');
            cy.get('.modal-footer > p').should('exist');
            cy.get('.modal-footer > p').click();
            cy.get('.example > h3').should('have.text', 'Entry Ad');
            cy.get('#restart-ad').click();
            cy.wait(2000);
            cy.get('.modal > .modal-title > h3').should('exist');
            cy.get('.modal-footer > p').should('exist');
            cy.get('.modal-footer > p').click();
            cy.get('.example > h3').should('have.text', 'Entry Ad');
        });
    });


    context('Page 16 - Exit Intent page check', () => {
        beforeEach(() => {
            cy.contains('Exit Intent').click();
            cy.get('.example').should('exist');
            cy.get('p').should('exist');
            });

        it('TC038 - Verify modal shows on exit page', () => {
            cy.get(".modal").should('not.be.visible');
            cy.get("#flash-messages").trigger("mouseover");
            cy.get("#flash-messages").trigger("mouseleave");
            cy.get(".modal").should('be.visible');
        });

        it('TC039 - Verify modal is closed after closed when exit page', () => {
            cy.get("#flash-messages").trigger("mouseover");
            cy.get("#flash-messages").trigger("mouseleave");
            cy.get(".modal").should('be.visible');
            cy.get('.modal-footer > p').click();
            cy.get(".modal").should('not.be.visible');
        });
    });



    context('Page 17 - File Downloads page check', () => {
        beforeEach(() => {
            cy.contains('File Download').click();
            cy.get('.example').should('exist');
            cy.get('h3').should('exist');
            });

        it('TC040 - Verify download page', () => {
            cy.get('[href="download/Vaccinate.jpg"]').should('exist');
            cy.get('[href="download/some-file.txt"]').should('exist');
            cy.get('[href="download/sample.png"]').should('exist');
            cy.get('[href="download/luminoslogo.png"]').should('exist');
        });

        it('TC041 - verify file exists after downloading', () => {
            //using date to create a folder to avoid duplicate
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();

            cy.readFile('downloads_'+date+'_'+time+'/Vaccinate.jpg').should('not.exist');
            cy.downloadFile('http://the-internet.herokuapp.com/download/Vaccinate.jpg','downloads_'+date+'_'+time,'Vaccinate.jpg');
            cy.wait(2000);
            cy.readFile('downloads_'+date+'_'+time+'/Vaccinate.jpg').should('exist');

            cy.readFile('downloads_'+date+'_'+time+'/some-file.txt').should('not.exist');
            cy.downloadFile('http://the-internet.herokuapp.com/download/some-file.txt','downloads_'+date+'_'+time,'some-file.txt');
            cy.wait(2000);
            cy.readFile('downloads_'+date+'_'+time+'/some-file.txt').should('exist');

            cy.readFile('downloads_'+date+'_'+time+'/sample.png').should('not.exist');
            cy.downloadFile('http://the-internet.herokuapp.com/download/sample.png','downloads_'+date+'_'+time,'sample.png');
            cy.wait(2000);
            cy.readFile('downloads_'+date+'_'+time+'/sample.png').should('exist');

            cy.readFile('downloads_'+date+'_'+time+'/luminoslogo.png').should('not.exist');
            cy.downloadFile('http://the-internet.herokuapp.com/download/luminoslogo.png','downloads_'+date+'_'+time,'luminoslogo.png');
            cy.wait(2000);
            cy.readFile('downloads_'+date+'_'+time+'/luminoslogo.png').should('exist');
        });
    });

    context('Page 18 - File upload page check', () => {
        beforeEach(() => {
            cy.contains('File Upload').click();
            cy.get('.example').should('exist');
            cy.get('h3').should('exist');
            });

        it('TC042 - Verify upload page components', () => {
            cy.get('.example > p').should('exist');
            cy.get('#file-upload').should('exist');
            cy.get('#file-submit').should('exist');
            cy.get('#drag-drop-upload').should('exist');
        });

        it('TC043 - verify error thrown on uploading without any file', () => {
            cy.get('#file-submit').should('exist');
            cy.get('#file-submit').click();
            cy.get('body > h1').should('have.text','Internal Server Error');
        });

        it('TC044 - verify file uploads successfully when uploaded through upload button', () => {
            const filepath = 'images/80x80.png';
            cy.get('#file-upload').attachFile(filepath);
            cy.get('#file-submit').click();
            cy.wait(1000);
            cy.get('.example > h3').should('have.text', 'File Uploaded!');
            cy.get('#uploaded-files').should('have.text', '\n    80x80.png\n  ');
        });

        it('TC045 - verify file uploads successfully when uploaded through upload drag and drop area', () => {
            const filepath = 'images/80x80.png';
            cy.get('#drag-drop-upload').attachFile(filepath, { subjectType: 'drag-n-drop' });
            cy.wait(1000);
            cy.get('#drag-drop-upload > div > div.dz-details > div > span').should('have.text', '80x80.png');
            cy.get('.dz-success-mark').should('exist');
        });
    });

    context('Page 19 - Floating Menu page check', () => {
        beforeEach(() => {
            cy.contains('Floating Menu').click();
            cy.get('.example').should('exist');
            cy.get('.example > h3').should('exist');
            });

        it('TC046 - Verify Floating menu page components', () => {
            cy.get('.example > h3').should('exist');
            cy.get('[href="#home"]').should('exist');
            cy.get('[href="#news"]').should('exist');
            cy.get('[href="#contact"]').should('exist');
            cy.get('[href="#about"]').should('exist');

            for(let i=1;i<11;i++){
                cy.get('.scroll > :nth-child('+i+')').should('exist');
            }
        });

        it('TC047 - verify on scrolling to center, bottom and top the menu is visible using scrollto', () => {
            cy.get('[href="#home"]').should('be.visible');
            cy.get('[href="#news"]').should('be.visible');
            cy.get('[href="#contact"]').should('be.visible');
            cy.get('[href="#about"]').should('be.visible');
            cy.scrollTo("center");
            cy.get('.scroll > :nth-child(6)').should('be.visible');
            cy.get('[href="#home"]').should('be.visible');
            cy.get('[href="#news"]').should('be.visible');
            cy.get('[href="#contact"]').should('be.visible');
            cy.get('[href="#about"]').should('be.visible');
            cy.scrollTo("bottom");
            cy.get('.scroll > :nth-child(10)').should('be.visible');
            cy.get('[href="#home"]').should('be.visible');
            cy.get('[href="#news"]').should('be.visible');
            cy.get('[href="#contact"]').should('be.visible');
            cy.get('[href="#about"]').should('be.visible');
            cy.scrollTo("top");
            cy.get('[href="#home"]').should('be.visible');
            cy.get('[href="#news"]').should('be.visible');
            cy.get('[href="#contact"]').should('be.visible');
            cy.get('[href="#about"]').should('be.visible');
        });

        it('TC048 - verify on scrolltoview on each element the menu is visible', () => {

            for(let i=1;i<11;i++){
                cy.get('.scroll > :nth-child('+i+')').scrollIntoView();
                cy.get('[href="#home"]').should('be.visible');
                cy.get('[href="#news"]').should('be.visible');
                cy.get('[href="#contact"]').should('be.visible');
                cy.get('[href="#about"]').should('be.visible');
            }
        });
    });

    context('Page 20 - Forgot password page check', () => {
        beforeEach(() => {
            cy.contains('Forgot Password').click();
            cy.get('.example').should('exist');
            cy.get('.example > h2').should('exist');
            });

        it('TC049 - Verify Forgot password page components', () => {
            cy.get('.example > h2').should('exist');
            cy.get('#email').should('exist');
            cy.get('#form_submit').should('exist');
        });

        it('TC050 - Enter valid email and click on forget password', () => {
            cy.contains('Internal Server Error').should('not.exist')
            cy.get('#email').type('13sep2021_cy@mailinator.com');
            cy.get('#form_submit').click();
            cy.wait(1000);
            cy.get('body > h1').should('be.visible');
            cy.contains('Internal Server Error').should('exist')
        });

        it('TC051 - Enter invalid email and click on forget password', () => {
            cy.contains('Internal Server Error').should('not.exist')
            cy.get('#email').type('negativetestcase');
            cy.get('#form_submit').click();
            cy.wait(1000);
            cy.get('body > h1').should('be.visible');
            cy.contains('Internal Server Error').should('exist')
        });
     });

    context('Page 21 - Form Authentication page check', () => {
        beforeEach(() => {
            cy.viewport(1024, 768);
            cy.contains('Form Authentication').click();
            cy.get('.example').should('exist');
            cy.get('.example > h2').should('exist');
        });

        it('TC052 - Verify page components', () => {
            cy.get('.subheader').should('exist');
            cy.get('#username').should('exist');
            cy.get('#password').should('exist');
            cy.get('.radius').should('exist');
        });

        it('TC053 - Enter valid credential and verify logged in', () => {
            cy.get('#username').should('exist');
            cy.get('#username').type('tomsmith');

            cy.get('#password').should('exist');
            cy.get('#password').type('SuperSecretPassword!');

            cy.get('.radius').should('exist');
            cy.get('.radius').click();

            cy.log('Entering valid credentials')
            cy.wait(1000);

            cy.get('.success').should('be.visible');
            cy.get('.example > h2').should('be.visible');
            cy.log('Login Successful');

            cy.log('Logging out of session');
            cy.get('.close').click({force: true});
            cy.log('removing the success message');
            cy.get('[href="/logout"]').click();
            cy.wait(1000);

            cy.get('.success').should('be.visible');
            cy.log('logged out successfully');
            cy.get('.close').click({force: true});
            cy.log('removing the logout message');
            cy.get('success').should('not.exist');
        });

        it('TC054 - Enter invalid credential and verify error message is shown', () => {
            cy.get('#username').should('exist');
            cy.get('#username').type('ab');

            cy.get('#password').should('exist');
            cy.get('#password').type('cd');

            cy.get('.radius').should('exist');
            cy.get('.radius').click();
            cy.log('Entering invalid credentials');
            cy.wait(1000);

            cy.get('.error').should('exist');
            cy.log('error message is shown');
            cy.get('.close').click({force: true});
            cy.log('removing the error message');
            cy.get('.error').should('not.exist');
        });
    });


    context('Page 22 - Frames page check', () => {
        beforeEach(() => {
            //cy.viewport('iphone-6');
            cy.contains('Frames').click();
            cy.get('.example').should('exist');
            cy.get('.example > h3').should('exist');
            });

        it('TC055 - Verify page components', () => {
            cy.get('.example > h3').should('exist');
            cy.get('[href="/nested_frames"]').should('exist');
            cy.get('[href="/iframe"]').should('exist');
        });

        it('TC056 - Enter nested frames page and test content', () => {
            cy.get('.example > h3').should('exist');
            cy.get('[href="/nested_frames"]').should('exist');
            cy.get('[href="/nested_frames"]').click();

            cy.log('Veriying the frame text of top frame by parsing through the document');
            cy.get('frame[src="/frame_top"]').within($frame => {
                const [frame_top] = $frame.get();

                const text_l = frame_top.contentDocument.body.getElementsByTagName('frame')[0].contentDocument.body.innerText
                expect(text_l).to.be.eql('LEFT')

                const text_m = frame_top.contentDocument.body.getElementsByTagName('frame')[1].contentDocument.body.querySelector('div#content').innerText
                expect(text_m).to.be.eql('MIDDLE')

                const text_r = frame_top.contentDocument.body.getElementsByTagName('frame')[2].contentDocument.body.innerText
                expect(text_r).to.be.eql('RIGHT')
            });

            cy.log('Veriying the frame text of bottom frame by parsing through the document');
            cy.get('frame[src="/frame_bottom"]').within($frame => {
                const [frame_bottom] = $frame.get();
                const text_b = frame_bottom.contentDocument.body.innerText;
                expect(text_b).to.be.eql('BOTTOM');
            });
        });

        it('TC057 - Enter iframe page and test content', () => {
            cy.get('.example > h3').should('exist');
            cy.get('[href="/iframe"]').should('exist');
            cy.get('[href="/iframe"]').click();

            cy.log('Verifying all elements are visible in page');
            cy.get('h3').should('be.visible');
            cy.get(':nth-child(1) > .tox-mbtn__select-label').should('be.visible');
            cy.get(':nth-child(2) > .tox-mbtn__select-label').should('be.visible');
            cy.get(':nth-child(3) > .tox-mbtn__select-label').should('be.visible');
            cy.get(':nth-child(4) > .tox-mbtn__select-label').should('be.visible');
            cy.get('[aria-label="Undo"]').should('be.visible');
            cy.get('[title="history"] > .tox-tbtn--disabled > .tox-icon > svg').should('be.visible');
            cy.get('[title="styles"] > .tox-tbtn').should('be.visible');
            cy.get('[title="styles"] > .tox-tbtn').should('be.visible');
            cy.get('[aria-label="Bold"] > .tox-icon > svg').should('be.visible');
            cy.get('[aria-label="Italic"] > .tox-icon > svg').should('be.visible');
            cy.get('[aria-label="Align left"] > .tox-icon > svg').should('be.visible');
            cy.get('[aria-label="Align center"]').should('be.visible');
            cy.get('[aria-label="Align right"]').should('be.visible');
            cy.get('[aria-label="Justify"] > .tox-icon > svg').should('be.visible');
            cy.get('[title="indentation"] > .tox-tbtn--disabled > .tox-icon > svg').should('be.visible');
            cy.get('[aria-label="Increase indent"]').should('be.visible');
            cy.get('.tox-statusbar__path').should('be.visible');

            cy.log('Entering text inside the iframe editor')
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation')

            cy.get(':nth-child(1) > .tox-mbtn__select-label').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get(':nth-child(2) > .tox-mbtn__select-label').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get(':nth-child(3) > .tox-mbtn__select-label').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get(':nth-child(4) > .tox-mbtn__select-label').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Undo"]').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[title="history"] > .tox-tbtn--disabled > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[title="styles"] > .tox-tbtn').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[title="styles"] > .tox-tbtn').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Bold"] > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Italic"] > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Align left"] > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Align center"]').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Align right"]').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Justify"] > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[title="indentation"] > .tox-tbtn--disabled > .tox-icon > svg').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('[aria-label="Increase indent"]').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');

            cy.get('.tox-statusbar__path').click();
            cy.getIframe('#mce_0_ifr').clear().type('Welcome to automation');
        });
    });

    context('Page 23 - Horizontal Slider page check', () => {
        beforeEach(() => {
            //cy.viewport('iphone-6');
            cy.contains('Horizontal Slider').click();
            cy.get('.example').should('exist');
            cy.get('.example > h3').should('exist');
            });

        it('TC058 - Verify page components', () => {
            cy.get('.example > h3').should('exist');
            cy.get('.subheader').should('exist');
            cy.get('.sliderContainer').should('exist');
            cy.get('#range').should('have.text','0');
        });

        it('TC059 - Move slider to middle and check the value beside', () => {
            cy.get('.sliderContainer').should('exist');
            cy.get('#content > div > div > input[type=range]').invoke('val', '2.5').trigger('change');
            cy.get('#range').should('have.text','2.5');
        });

        it('TC060 -  Move slider to end and check the value beside', () => {
            cy.get('.sliderContainer').should('exist');
            cy.get('#content > div > div > input[type=range]').invoke('val', '5.0').trigger('change');
            cy.get('#range').should('have.text','5');
        });

        it('TC061 -  move the slider by 1 from min to max', () => {
            cy.get('.sliderContainer').should('exist');
            for(let i=0; i<6; i++){
                cy.get('#content > div > div > input[type=range]').invoke('val', i).trigger('change');
                cy.get('#range').should('have.text', i);
            }
        });
    });

    context('Page 24 - Hovers page check', () => {
        beforeEach(() => {
            //cy.viewport('iphone-6');
            cy.contains('Hovers').click();
            cy.get('.example').should('exist');
            cy.get('.example > h3').should('exist');
            });

        it('TC062 - Verify page components', () => {
            cy.get('.example > h3').should('exist');
            cy.get('.example > h3').should('have.text', 'Hovers');
            cy.get('.example > p').should('exist');

            cy.get(':nth-child(3) > img').should('exist');
            cy.get(':nth-child(4) > img').should('exist');
            cy.get(':nth-child(5) > img').should('exist');
        });

        it('TC063 - Do mouse over on 3 images and verify the names are proper', () => {
            cy.get('.example > p').should('exist');

            cy.get(':nth-child(3) > img').should('exist');
            cy.get(':nth-child(3) > img').trigger('mouseover').click();
            cy.get('.figcaption > h5').should('be.hidden');
            cy.get('.figcaption > h5').contains('name: user1');

            cy.get(':nth-child(4) > img').should('exist');
            cy.get(':nth-child(4) > img').trigger('mouseover');
            cy.get('.figcaption > h5').should('be.hidden');
            cy.get('.figcaption > h5').contains('name: user2');

            cy.get(':nth-child(5) > img').should('exist');
            cy.get(':nth-child(5) > img').trigger('mouseover');
            cy.get('.figcaption > h5').should('be.hidden');
            cy.get('.figcaption > h5').contains('name: user3');
        });

        it('TC064 - Mouse over and view the hidden contents', () => {
            cy.get(':nth-child(3) > img').should('exist');
            cy.get(':nth-child(3) > img').trigger('mouseover');
            cy.get('div > .figcaption').first().should('be.hidden').invoke('show');
            cy.get('.figcaption > h5').first().should('be.visible');

            cy.get(':nth-child(4) > img').should('exist');
            cy.get(':nth-child(4) > img').trigger('mouseover');
            cy.get('div > .figcaption').eq(1).should('be.hidden').invoke('show');
            cy.get('.figcaption > h5').eq(1).should('be.visible');

            cy.get(':nth-child(4) > img').should('exist');
            cy.get(':nth-child(4) > img').trigger('mouseover');
            cy.get('div > .figcaption').last().should('be.hidden').invoke('show');
            cy.get('.figcaption > h5').last().should('be.visible');
        });


        it('TC065 -  Do mouse over on all 3 image and visit the link and come back', () => {
            cy.get('.example > p').should('exist');

            cy.get(':nth-child(3) > img').should('exist');
            cy.get('[href="/users/1"]').invoke('show').click({force: true});
            cy.url().should('contain', 'http://the-internet.herokuapp.com/users/1');
            cy.go('back');

            cy.get(':nth-child(4) > img').should('exist');
            cy.get('[href="/users/2"]').invoke('show').click({force: true});
            cy.url().should('contain', 'http://the-internet.herokuapp.com/users/2');
            cy.go('back');

            cy.get(':nth-child(5) > img').should('exist');
            cy.get('[href="/users/3"]').invoke('show').click({force: true});
            cy.url().should('contain', 'http://the-internet.herokuapp.com/users/3');
            cy.go('back');
        });
    });


    context('Page 25 - Infinite Scroll page check', () => {
        beforeEach(() => {
            //cy.viewport('iphone-6');
            cy.contains('Infinite Scroll').click();
            cy.get('.example').should('exist');
            cy.get('.example > h3').should('exist');
            });

        it('TC066 - Verify all elements are visible', () => {
            cy.get('h3').should('be.visible');
            cy.get('.row').should('be.visible');
        })

        it('TC067- Scroll to bottom of the page 10 times and scroll to top at the end', () => {+
            cy.get('.example').contains('Infinite Scroll');
            cy.get('.example > h3').should('exist');
            for(let i=0; i<10; i++){
                cy.scrollTo('bottom', {duration: 2000});
                cy.wait(500);
            }
            cy.scrollTo('top');
            cy.wait(2000);
        });
    });

});
