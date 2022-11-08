/// <reference types="cypress" />


import {MainPage} from '../fixtures/page-objects/main'
import {LoginPage} from '../fixtures/page-objects/login'
import {WelcomePage} from '../fixtures/page-objects/welcome'



describe("Test de login", () =>{

    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    const welcomePage = new WelcomePage()
 
  beforeEach(() =>{

    mainPage.navigate()
    mainPage.clickLoginOption()
   
  })


  it("A valid user can login", () =>{
   loginPage.fillUser("tomsmith")
   loginPage.fillPass("SuperSecretPassword!")
   loginPage.clickButtonLogin()
   welcomePage.checkMessage("You logged into a secure area!") })

  it("A not valid username try login", () =>{
   loginPage.fillUser("incorrect")
   loginPage.fillPass("SuperSecretPassword!")
   loginPage.clickButtonLogin()
   welcomePage.checkMessage("Your username is invalid!")
    })

  it("A not valid password try login", () =>{
   loginPage.fillUser("tomsmith")
   loginPage.fillPass("incorrect")
   loginPage.clickButtonLogin()
   welcomePage.checkMessage("Your password is invalid!")
    })

  it("Empty username and password fields try login", () =>{
    loginPage.fillUser(" ")
    loginPage.fillPass(" ")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("Your username is invalid!")
    })

})



        
    

    
    