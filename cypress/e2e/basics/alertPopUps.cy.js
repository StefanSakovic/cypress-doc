
describe('Test Suite for checkboxes', function () {


    it('testing window alert', function () {
        //cypress auto accept alers and pop ups bu clicking ok behind the scenes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#alertbtn').click()

        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })
    })


    it('testing window confirm', function () {
        //cypress auto accept alers and pop ups bu clicking ok behind the scenes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.be.equal('Hello , Are you sure you want to confirm?')
        })
    })


})