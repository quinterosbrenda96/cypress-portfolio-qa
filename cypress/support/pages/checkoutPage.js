class CheckoutPage {
  elements = {
    firstNameInput: () => cy.get('#first-name'),
    lastNameInput: () => cy.get('#last-name'),
    postalCodeInput: () => cy.get('#postal-code'),
    continueButton: () => cy.get('#continue'),
    finishButton: () => cy.get('#finish'),
    completeHeader: () => cy.get('.complete-header'),
    checkoutButton: () => cy.get('#checkout')
  }

  clickCheckout() {
    this.elements.checkoutButton().click();
  }

  fillShippingInfo(firstName, lastName, postalCode) {
    this.elements.firstNameInput().type(firstName);
    this.elements.lastNameInput().type(lastName);
    this.elements.postalCodeInput().type(postalCode);
  }

  clickContinue() {
    this.elements.continueButton().click();
  }

  clickFinish() {
    this.elements.finishButton().click();
  }

  verifyOrderCompleted(expectedMessage) {
    this.elements.completeHeader().should('have.text', expectedMessage);
  }
}

export const checkoutPage = new CheckoutPage();