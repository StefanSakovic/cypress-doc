describe('POST Request Test', () => {
    it('create the token', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your-token-here'
            },
            body: {
                "clientName": "Stefan3",
                "clientEmail": "stefansakovic133795@gmail.com"
            }
        }).then((response) => {
            cy.log(JSON.stringify(response.body))
            // expect(response.status).to.equal(201);
            // expect(response.body).to.have.property('key1', 'value1');
            // expect(response.body).to.have.property('key2', 'value2');
        });
    });
});

it.only('should use the token in a subsequent  POST request', () => {
    const token = Cypress.env('token');

    cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
            'Authorization': `Bearer ${token}` // Korišćenje tokena u headeru
        }, 
        body:{
            "bookId": 6,
            "customerName": "Stefan Sakovic1337909"
        }
    }).then((response) => {
        expect(response.status).to.equal(201);
        // Provjerite tijelo odgovora ili bilo koje druge atribute
        expect(response.body).to.have.property('created', true);

        
    });
});


