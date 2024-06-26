
describe('handling DB', function () {

    it.only('test db', function () {

        cy.task("queryDb","select * from myfirstdatabase.persons;").then(res =>{
            
            cy.log(JSON.stringify(res[0]))
            cy.log(JSON.stringify(res[1]))
          
            expect(res[0].LastName).to.equal('sakovic')
        })
    })
})