// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('assertByName', (name) => {

    cy.get('app-card-list app-card h4').each((el, index) => {
        el.text().includes(name) && cy.get('app-card-list app-card button').eq(index).click()
    })
})

Cypress.Commands.add('LoginAPI', (method, url) => {

    cy.request(method, url, { "username": "Stefan", "pw": "sometext" }).then(response => {
        
        expect(response.status).to.eq(201)
        Cypress.env('token', response.body.token)

    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })