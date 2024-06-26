
describe('Test Suite for dropdowns', function () {


    it('static dropdown', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('select').select('option1').should('have.value','option1')
    })

    it.only('dynamic dropdown',() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1').find('li').each((el) => {
                el.text() === "India" && cy.wrap(el).click()
            }
        )
        cy.get('#autocomplete').should('have.value', 'India')
    })

})