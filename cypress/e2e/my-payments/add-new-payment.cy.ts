import { STRINGS } from 'src/app/@shared/enums';
/// <reference types="cypress" />

describe('Fluxo novo pagamento - Teste Técnico da PicPay (estudo)', () => {
  beforeEach(() => {
    cy.authenticationInApplication();
  });

  it('Deve clicar em Adicionar Pagamento e verificar se o Modal foi aberto.', () => {
    cy.openDialogNewPayment();
    cy.get('#pr_id_1-label').should('have.text', STRINGS.TITLE_ADD_PAYMENTS)
  });
});
