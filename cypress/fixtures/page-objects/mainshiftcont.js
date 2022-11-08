export class MainPage{

    navigate() {
        cy.visit("https://the-internet.herokuapp.com")
    }
    
    clickShiftingContentOption () {
        cy.get(':nth-child(39) > a').click()
    
    }
    }









