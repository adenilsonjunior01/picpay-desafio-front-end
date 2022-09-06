/// <reference types="cypress" />

import { CY_SELECTORS, STRINGS } from "src/app/@shared/enums";
import { environment } from "src/environments/environment";

describe('Fluxo de Pesquisa e Paginação - Teste Técnico da PicPay (estudo)', () => {
  beforeEach(() => {
    cy.authenticationInApplication();
  });

  it('Deve verificar página correta', () => {
    cy.get(`#${ CY_SELECTORS.SELECTOR_TITLE_MY_PAYMENTS }`)
      .should('have.text', STRINGS.TITLE_MY_PAYMENTS);
  });

  it.only('Deve verificar se retornou resultado na busca ', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/tasks`,
      qs: {
        "_page": "1",
        "_limit": "10",
      }
    }).then(($response) => {
      expect($response.status).to.eq(200);
      expect($response.body).to.length(10);
      expect($response.allRequestResponses[0]['Request URL']).to.eq(`${environment.API_URL}/tasks?_page=1&_limit=10`);
    });
  });

  it('Deve preencher o input de "Pesquisa por usuário" e submeter a busca', () => {
    cy.fillInputSearch();

    cy.get(`#${ CY_SELECTORS.SELECTOR_TABLE_PAYMENTS} table > tbody`)
      .find('tr')
      .should(($element) => {
        const child = $element[0].childNodes[1];
        expect(child).to.contain('Pennie Dumphries');
    });
  });

});
