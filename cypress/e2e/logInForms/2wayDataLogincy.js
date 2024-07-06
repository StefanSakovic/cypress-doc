
import HomePage from "../../support/pageObjectModel.cy"
describe('Test Suite for LogIn form using  JSON & COMMANDS', function () {

    before(() => {

        cy.fixture('example').then((data) => {
            cy.log(data)
            globalThis.data = data;
        })

    })
    it.only('Test case with JSON', function () {
        cy.visit(Cypress.env("url")+'angularpractice')
        const homePage = new HomePage;
        homePage.resolveNameInput()
        // cy.get('.form-group').eq(0).type(data.name)
        // cy.wait(3000)
        // cy.get('.form-group').eq(0).find('input').should('have.value', data.name)
        // cy.get('.form-group').eq(0).find('input').should('have.attr', 'minlength', "2")

        cy.get('.form-group').eq(1).find('input').type(data.email)
        cy.get('.form-group').eq(2).find('input').type(data.pw)
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select('Male')
        cy.get('#inlineRadio1').check()

        // cy.get('inlineRadio3').should('be.enabled')
        cy.get('[value="option3"').should('be.disabled')

    })
    it('Test case with JSON& & COMMANDS', function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice")
        cy.get('[href="/angularpractice/shop"]').click()
        data.productName.forEach(el => {
            cy.assertByName(el)
        })

        // cy.assertByName(data.productName[1])
        // cy.assertByName(data.productName[2])
        // cy.assertByName(data.productName[3])

        // cy.get('app-card-list app-card h4').each((el, index) => {

        //     el.text().includes('iphone X') && cy.get('app-card-list app-card button').eq(index).click()

        //     el.text().includes('Samsung Note 8') && cy.get('app-card-list app-card button').eq(index).click()

        //     el.text().includes('Nokia Edge') && cy.get('app-card-list app-card button').eq(index).click()

        //     el.text().includes('Blackberry') && cy.get('app-card-list app-card button').eq(index).click()


        // })


    })




})