
describe('handling req', function () {

    it.only('Mocking request with assertion of status code', function () {


        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");


        cy.intercept('GET',"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",(req)=>{

            req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Stefan";//modify url

            req.continue((res)=>
                {
                    expect(res.statusCode).to.equal(200)
                }
            )//fun fo hitting server with new url req.continue()
        }).as("dymmyUrl")
        cy.get('.btn-primary').click()
    })
})