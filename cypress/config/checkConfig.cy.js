describe("prove config file", () => {

    it("check the env variable from different config file", () => {

        cy.log(Cypress.env("first_name"))
    })
})