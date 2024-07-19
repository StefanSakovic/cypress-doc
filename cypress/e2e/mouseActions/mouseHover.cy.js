
describe('Testa case for Mouse Action', function () {


    it.only('Test case for mouse-hover from rahulshettyacademy.com ', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.get('.mouse-hover-content').invoke('show').find('a').each(el => {
            el.text().includes('Top') && cy.get('[href="#top"]').click() && cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/#top')
            el.text().includes('Reload') && cy.get('.mouse-hover-content').find('a').eq(1).click() && cy.url().should('eq', 'https://rahulshettyacademy.com/AutomationPractice/')
            //we can pass {force:true} to click on invisble elements
        })
    })


    
    it('Test case for mouse-hover frl http://www.webdriveruniversity.com/', function () {
        cy.visit("http://www.webdriveruniversity.com/Actions/index.html")

        cy.get('#div-hover').find('button').eq(2).invoke('show')
        cy.get('.dropdown-content').find('a').should('be.visible')
        // cy.get('a').contains('Link 1').click({force:true})
        // cy.on('window:alert', (str) => {
        //     expect(str).to.be.equal('Well done you clicked on the link!')
        // })
    })
})