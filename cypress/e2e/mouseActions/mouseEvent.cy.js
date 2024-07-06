describe("Handling mouse-actions", () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com');
        cy.wait(2000)
    })
    it("Sroll element into view ", () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    });

    it("should be able to drag and drop a draggable item", () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        //we catch a small window and with 'mousedown' we hold a click. 
        //'mousedown' means that we hold/press (without letting go)..It means that we do not take our finger off the click.

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
        //then we get the big window and moved the cursor from the small one to the big one with the 'mousemove', 
        //then we are done with 'mouseup' which is for removing the finger from the mouse.
    });

    it("should be able to make dblclick on element", () => {
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
        cy.get('#double-click').dblclick();
    });

    it("should be able to click and hold", () => {

        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(el => {//we did not do 'mouseup' after 'mousedown', which means that we are holding the cursor on the element
            expect(el).to.have.css('background-color', 'rgb(0, 255, 0)');
        });
    });
});