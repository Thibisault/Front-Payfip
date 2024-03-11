describe('Navigation Flow (FR)', () => {
    it('Navigates through the app routes in order', () => {
      let currentPublicStructureId = 1;
  
      cy.visit('/');
      cy.get('img.flag.flag-fr').click();
      cy.get('button').contains('PAYER VOS FACTURES PUBLIQUES').click();
      cy.url().should('include', '/collectivite');
  
      while (currentPublicStructureId <= 5000) {
        cy.submitCollectiviteForm(currentPublicStructureId.toString());
        cy.url().should('include', '/facture');
        cy.get('button').contains('Annuler').click();
        cy.url().should('include', '/collectivite');
  
        currentPublicStructureId++;
      }
    });
  });
  