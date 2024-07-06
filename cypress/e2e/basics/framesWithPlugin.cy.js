import 'cypress-iframe'
describe('Test Suite for checkboxes', function () {


    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.frameLoaded("#courses-iframe")//iframe id

     
        
        cy.iframe().find('a[href*="mentorship"]').eq(0).then(el=>{
            cy.wrap(el)
        })
        // cy.iframe("h1[class*='pricing-title']").should('have.length', 2)

    })
})