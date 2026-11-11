# Cypress QA Automation Portfolio - SauceDemo

Este repositorio contiene una suite de pruebas automatizadas End-to-End (E2E) desarrollada sobre la plataforma [SauceDemo](https://www.saucedemo.com/).
El objetivo principal de este proyecto es demostrar la aplicación de buenas prácticas en QA Automation, arquitectura escalable y diseño de software modular utilizando el patrón Page Object Model (POM).

---

# Tecnologías y Herramientas

* **Lenguaje:** JavaScript (ES6+)
* **Framework de Pruebas:** Cypress (v13+)
* **Patrón de Diseño:** Page Object Model (POM)
* **Gestor de Dependencias:** Node.js & npm
* **Control de Versiones:** Git & GitHub

---

# Estructura del Proyecto

El proyecto sigue una arquitectura limpia separando la capa de elementos/interacciones (Page Objects) de la capa de pruebas ejecutables:

```text
cypress-portfolio-qa/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js           # Tests de autenticación (casos positivos y de borde)
│   │   ├── cart.cy.js            # Tests de catálogo y gestión de productos en carrito
│   │   └── checkout.cy.js        # Test E2E completo de proceso de compra
│   └── support/
│       └── pages/
│           ├── loginPage.js      # Page Object para la vista de Login
│           ├── productsPage.js   # Page Object para la vista de Productos e Inventario
│           └── checkoutPage.js   # Page Object para el carrito y formulario de checkout
├── cypress.config.js             # Configuración global de Cypress
├── package.json                  # Dependencias e itinerario de scripts npm
└── README.md                     # Documentación del repositorio