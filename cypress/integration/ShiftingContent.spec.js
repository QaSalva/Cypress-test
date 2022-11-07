/// <reference types="cypress" />

describe("Test de Shifting content", () =>{

it("Shifting Content Menu has the five elements", () =>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('li').should('have.length' ,5 )})

})  