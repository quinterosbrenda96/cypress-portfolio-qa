import { loginPage } from '../support/pages/loginPage';
import { productsPage } from '../support/pages/productsPage';

describe('Flujo de Productos y Carrito - SauceDemo', () => {
  
  // Hook beforeEach para mantener el principio DRY (Don't Repeat Yourself)
  beforeEach(() => {
    loginPage.visit();
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
  });

  it('Debe permitir iniciar sesión, validar el ingreso a productos y agregar un ítem al carrito', () => {
    // 1. Validamos que ingresamos correctamente a la sección de inventario
    productsPage.verifyPageTitle('Products');

    // 2. Agregamos el primer producto al carrito usando nuestro POM
    productsPage.addFirstProductToCart();

    // 3. Verificamos que el contador del carrito refleje "1" producto agregado
    productsPage.elements.cartBadge().should('have.text', '1');

    // 4. Hacemos clic en el carrito para prepararnos para el siguiente paso (checkout)
    productsPage.clickCartButton();

    // 5. Verificamos que la URL contenga cart.html
    cy.url().should('include', '/cart.html');
  });
});