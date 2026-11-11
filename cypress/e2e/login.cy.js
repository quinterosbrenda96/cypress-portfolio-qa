// Importamos la página que creamos
import { loginPage } from '../support/pages/loginPage';

describe('Pruebas de Autenticación con POM - SauceDemo', () => {

  beforeEach(() => {
    // En lugar de cy.visit('...'), usamos el método de la página
    loginPage.visit();
  });

  it('Debe permitir iniciar sesión con un usuario válido', () => {
    // Usamos las acciones de la clase
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();

    // Aserción
    cy.url().should('include', '/inventory.html');
  });

 it('Debe mostrar un mensaje de error con credenciales inválidas', () => {
  loginPage.typeUsername('invalid_user');
  loginPage.typePassword('invalid_password');
  loginPage.clickLogin();

  // Validamos el elemento de error definido en la Page Class
  loginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain', 'Username and password do not match');
});

  it('Debe mostrar Username is required por login con campos vacíos', () => {
  loginPage.clickLogin();

  // Validamos el elemento de error definido en la Page Class
  loginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain', 'Username is required');
});

});