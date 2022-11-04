/// <reference types="cypress" />

it("Shifting Content Menu has the five elements", () =>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.contains('Home')
    cy.contains('About')
    cy.contains('Contact Us')
    cy.contains('Portfolio')
    cy.contains('Gallery')

})