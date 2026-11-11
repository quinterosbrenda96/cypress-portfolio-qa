import { loginPage } from '../support/pages/loginPage';

describe('Pruebas de Autenticación con POM - SauceDemo', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('Debe permitir iniciar sesión con un usuario válido', () => {
    
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();

    cy.url().should('include', '/inventory.html');
  });

 it('Debe mostrar un mensaje de error con credenciales inválidas', () => {
  loginPage.typeUsername('invalid_user');
  loginPage.typePassword('invalid_password');
  loginPage.clickLogin();

  loginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain', 'Username and password do not match');
});

  it('Debe mostrar Username is required por login con campos vacíos', () => {
  loginPage.clickLogin();

  loginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain', 'Username is required');
});

});
