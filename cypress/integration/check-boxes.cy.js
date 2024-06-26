
describe('Test Suite for checkboxes', function () {


    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')

    })
    

})