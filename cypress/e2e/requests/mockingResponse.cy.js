
describe('handling req', function () {

    it.only('Mocking repsonse with assertion of length', function () {


        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.intercept({
            method: "GET",
            url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "for example",
                    "isbn": "cdef",
                    "aisle": "3456"
                }, {
                    "book_name": "for example",
                    "isbn": "cdef",
                    "aisle": "3456"
                },
            ]
        }).as('mockedRequest')

        cy.get('.btn-primary').click()

        cy.wait('@mockedRequest').then((interception) => {
            let responseBody = (interception.response.body)
            let responseLength = 0;
            
            cy.get('tbody tr').each((el) => {
                responseLength = el.length + responseLength
                cy.log((responseLength))
            }).then(() => {
                expect(responseLength).to.be.eq(responseBody.length)
            })
        })


    })
})