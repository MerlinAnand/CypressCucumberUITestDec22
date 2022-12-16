/// <reference types="Cypress" />

export class loginPage {

    getSignInLink () {
       return cy.get("div.panel.header > ul > li:nth-child(2)")     
      }

    getUserNameTextBox () {
        return cy.get("input#email")
      }

    getPasswordTextBox () {
        return cy.get("input[name='login[password]']")  
      }

    getLoginButton () {
        return cy.get("button.action.login.primary")
      }      

// Actions Methods

clickSignInLink(){
    this.getSignInLink().click()
}

enterUserName (userName) {
    this.getUserNameTextBox().type(userName)
}

enterPassword (password) {
    this.getPasswordTextBox().type(password)
}

clickLoginButton () {
    this.getLoginButton().click()
}

} 


export const loginPageObj = new loginPage()