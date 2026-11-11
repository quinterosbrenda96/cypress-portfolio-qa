class ProductsPage {
  // Selectores de la vista de inventario / productos
  elements = {
    // Selecciona el primer botón "Add to cart" disponible en la grilla
    firstAddToCartButton: () => cy.get('[data-test^="add-to-cart"]').first(),
    // Botón del icono del carrito de compras en la esquina superior derecha
    cartButton: () => cy.get('.shopping_cart_link'),
    // Badge con la cantidad de productos en el carrito
    cartBadge: () => cy.get('.shopping_cart_badge'),
    // Título de la sección para validar que estamos logueados correctamente
    pageTitle: () => cy.get('.title')
  }

  // Métodos / Acciones de negocio
  verifyPageTitle(expectedTitle) {
    this.elements.pageTitle().should('have.text', expectedTitle);
  }

  addFirstProductToCart() {
    this.elements.firstAddToCartButton().click();
  }

  clickCartButton() {
    this.elements.cartButton().click();
  }
}

// Exportamos la instancia lista para usar en los tests
export const productsPage = new ProductsPage();