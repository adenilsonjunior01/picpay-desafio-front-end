import { STRINGS, CY_SELECTORS } from 'src/app/@shared/enums';
/// <reference types="cypress" />

describe('Fluxo novo pagamento - Teste Técnico da PicPay (estudo)', () => {
  beforeEach(() => {
    cy.authenticationInApplication();
  });

  it('Deve clicar em Adicionar Pagamento e verificar se o Modal foi aberto.', () => {
    cy.openDialogNewPayment();
    cy.get('#pr_id_1-label').should('have.text', STRINGS.TITLE_ADD_PAYMENTS)
  });

  it('Deve preencher os campos do formulário e verificar se o formulário é válido.', () => {
    cy.openDialogNewPayment();
    cy.fillInputsForm();
    cy.get(`#${CY_SELECTORS.SELECTOR_BTN_SAVE}`).should('not.be.disabled');
  });

});
