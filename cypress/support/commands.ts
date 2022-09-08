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
});

Cypress.Commands.add('requestPayments', (page: string | number = 1, limit: string | number = 10) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/tasks`,
    qs: {
      "_page": page,
      "_limit": limit,
    }
  });
});

Cypress.Commands.add('openDialogNewPayment', () => {
  cy.get('#btn_new_payment').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      fillInputsEmailAndPassword(): void
      authenticationInApplication(): void
      fillInputSearch(): void
      requestPayments(page: string | number, limit: string | number): Promise<any>
      openDialogNewPayment(): void
    }
  }
}
