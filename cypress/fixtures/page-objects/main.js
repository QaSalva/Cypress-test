export class MainPage{

navigate() {
    cy.visit("https://the-internet.herokuapp.com")
}

clickLoginOption () {
    cy.get(':nth-child(21) > a').click()

}

clickShiftingContentOption () {
    cy.get(':nth-child(39) > a').click()

}

}