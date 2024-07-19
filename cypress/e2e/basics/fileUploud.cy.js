
describe("Handling file uplouds", () => {

    it("Test for uploud file", () => {

        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
       
            cy.get('#myFile').selectFile({
                contents : Cypress.Buffer.from('cypress\fixtures'),
                fileName : "laptop.png",
                mimeType: 'image/png',
                lastModified: Date.now(),

            });
      

        cy.get("#submit-button").click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!');
        })
        //assert for uploud file ALERT
    })

    it("Test for  NO uploud file", () => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
 
        cy.get("#submit-button").click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!');
            //assert for no uploud file ALERT
        });
    });
});
