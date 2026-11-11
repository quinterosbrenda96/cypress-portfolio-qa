import { loginPage } from '../support/pages/loginPage';
import { productsPage } from '../support/pages/productsPage';
import { checkoutPage } from '../support/pages/checkoutPage';

describe('Flujo E2E Completo de Compra - SauceDemo', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.typeUsername('standard_user');
    loginPage.typePassword('secret_sauce');
    loginPage.clickLogin();
  });

  it('Debe completar exitosamente todo el proceso de compra (End-to-End)', () => {
    productsPage.addFirstProductToCart();
    productsPage.clickCartButton();

    checkoutPage.clickCheckout();

    checkoutPage.fillShippingInfo('Brenda', 'Quinteros', '1428');
    checkoutPage.clickContinue();

    cy.url().should('include', '/checkout-step-two.html');
    checkoutPage.clickFinish();

    checkoutPage.verifyOrderCompleted('Thank you for your order!');
    cy.url().should('include', '/checkout-complete.html');
  });
});