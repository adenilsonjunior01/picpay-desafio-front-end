/// <reference types="cypress" />

import { CY_SELECTORS } from "src/app/@shared/enums";

Cypress.Commands.add('fillInputsEmailAndPassword', () => {
  cy.get(`#${ CY_SELECTORS.SELECTOR_EMAIL }`)
  .type('usuario@gmail.com');
  cy.get(`#${ CY_SELECTORS.SELECTOR_PASSWORD }`)
    .type('usuario'); });


declare global {
  namespace Cypress {
    interface Chainable {
      fillInputsEmailAndPassword(): Chainable<void>
    }
  }
}
