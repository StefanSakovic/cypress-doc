
describe('Test Suite for newTab', function () {


    it('handling with remove target 1ST way]', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        //cypress cannot interect with 2 domain so we need to tell him:
        cy.origin('https://www.qaclickacademy.com/', () => {

            cy.get('.logo').find('img').should('be.visible')
        })
    })
    
    
    it.only('handling with click on href [2ND way]', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{

                cy.get('div #navbarSupportedContent').find('a').contains('About').click()
                cy.url().should('be.eq','https://www.qaclickacademy.com/about.html')
                cy.get('h2').contains('About Us').should('be.visible')
            })
        })

    })
})