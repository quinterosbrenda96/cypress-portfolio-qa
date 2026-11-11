class LoginPage {
  // 1. Elementos (Locators)
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginBtn: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  // 2. Acciones (Métodos)
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }
}

export const loginPage = new LoginPage();