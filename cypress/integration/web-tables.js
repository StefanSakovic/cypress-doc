
describe('Test Suite for Web Table', function () {


    it('testing web-table', function () {
        //cypress auto accept alers and pop ups bu clicking ok behind the scenes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")
      
        cy.get('#product').find('tr td:nth-child(2)').each((el)=>{

            if(el.text().includes('SoapUI')){
                
                const instructor = el.prev().text()
                const price = el.next().text()
                expect(instructor).to.be.eq('Rahul Shetty')
                expect(price).to.be.eq("25")
              
            }
        })
    })

})