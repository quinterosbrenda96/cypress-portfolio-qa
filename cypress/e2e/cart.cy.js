import { loginPage } from '../support/pages/loginPage';
import { productsPage } from '../support/pages/productsPage';

describe('Flujo de Productos y Carrito - SauceDemo', () => {
  
  beforeEach(() => {
    loginPage.visit();
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
  });

  it('Debe permitir iniciar sesión, validar el ingreso a productos y agregar un ítem al carrito', () => {
    
    productsPage.verifyPageTitle('Products');

    productsPage.addFirstProductToCart();

    productsPage.elements.cartBadge().should('have.text', '1');

    productsPage.clickCartButton();
    
    cy.url().should('include', '/cart.html');
  });
});
