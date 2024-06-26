
describe('Test Suite for checkboxes', function () {


    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('#courses-iframe').then((iframe) => {
            const body = iframe.contents().find('body');//this is how we got the contents of the iframe

            cy.log(body); //here we make console log() of the body in order to see how the tag itself looks to us if we do not unpack it with cy.wrap()
            cy.log(cy.wrap(body));//now we use cy.wrap() to wrap  body so we can use cypress commands on it
            cy.wrap(body).as('iframe');
        });

        cy.get('@iframe').find('a[href="lifetime-access"]').eq(1).click({ force: true })
        })

    })

