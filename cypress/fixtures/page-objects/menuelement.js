export class MenuElementPage{

    
    checkMenuElementLength () {
        cy.get('li').should('have.length' ,5 )
    
    }
    }