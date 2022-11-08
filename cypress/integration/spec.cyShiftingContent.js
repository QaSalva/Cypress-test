/// <reference types="cypress" />


import {MainPage} from '../fixtures/page-objects/mainshiftcont'
import {ShiftingContentPage} from '../fixtures/page-objects/shiftingcontent'
import {MenuElementPage} from '../fixtures/page-objects/menuelement'



describe("Test de Shifting Content", () =>{

       const mainPage = new MainPage()
       const shiftingContentPage = new ShiftingContentPage()
       const menuElementPage = new MenuElementPage()


    it("Shifting Content Menu has the five elements", () =>{
        mainPage.navigate()
        mainPage.clickShiftingContentOption()
        shiftingContentPage.clickShiftingContentMenu()
        menuElementPage.checkMenuElementLength()
    })
    
   
  })
