/// <reference types="cypress" />

import { CY_SELECTORS } from "src/app/@shared/enums";

Cypress.Commands.add('fillInputsEmailAndPassword', () => {
  cy.get(`#${ CY_SELECTORS.SELECTOR_EMAIL }`)
  .type('usuario@gmail.com');
  cy.get(`#${ CY_SELECTORS.SELECTOR_PASSWORD }`)
    .type('usuario');
  });

Cypress.Commands.add('authenticationInApplication', () => {
  cy.visit('http://localhost:4200/login');
  cy.fillInputsEmailAndPassword();
  cy.contains(`button`, `Entrar`).click();
});

Cypress.Commands.add('fillInputSearch', () => {
  cy.get(`#${ CY_SELECTORS.SELECTOR_INPUT_SEARCH }`).type('Pennie Dumphries');
})

declare global {
  namespace Cypress {
    interface Chainable {
      fillInputsEmailAndPassword(): Chainable<void>,
      authenticationInApplication(): Chainable<void>,
      fillInputSearch(): Chainable<void>,
    }
  }
}
