
describe('Test Suite for visibleItems', function () {


    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

    })

    it.only('asertion for Radio buttons', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('#radio-btn-example').find('input').each(el=>
            cy.wrap(el).check().should('be.checked')
        )
    })

})