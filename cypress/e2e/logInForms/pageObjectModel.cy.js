
class HomePage {

    resolveNameInput(){
      
        cy.wait(3000)
        cy.get('.form-group').eq(0).type(data.name)
        cy.get('.form-group').eq(0).find('input').should('have.value', data.name)
        cy.get('.form-group').eq(0).find('input').should('have.attr', 'minlength', "2")
    }

}


export default HomePage