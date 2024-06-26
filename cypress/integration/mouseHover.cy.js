
describe('Testa case for Mouse Action', function () {


    it('Test case for mouse-over', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('.mouse-hover-content').invoke('show').find('a').each(el => {
            el.text().includes('Top') && cy.get('[href="#top"]').click() && cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/#top')
            el.text().includes('Reload') && cy.get('.mouse-hover-content').find('a').eq(1).click() && cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
            //we can pass {force:true} to click on invisble elements
        })
    })
})