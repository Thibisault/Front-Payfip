describe('Navigation Flow (FR)', () => {
  it('Navigates through the app routes in order', () => {
    const waitTime = 0; // Définir la variable de temps ici

    for (let i = 0; i < 100; i++) {
      // Générer des valeurs aléatoires
      const randomPublicStructureId = `12345${Math.floor(Math.random() * 100)}`;
      const randomInvoiceReference = `INV${Math.floor(Math.random() * 10000)}`;
      const randomInvoiceAmount = Math.floor(Math.random() * 1000) + 100; // Pour un montant entre 100 et 1100

      cy.visit('/');
      cy.wait(waitTime);
      cy.get('img.flag.flag-fr').click();

      cy.wait(waitTime);
      cy.get('button').contains('PAYER VOS FACTURES PUBLIQUES').click();
      cy.url().should('include', '/collectivite');

      cy.wait(waitTime);
      cy.get('input[id="publicStructureId"]').type(randomPublicStructureId);
      cy.get('button').contains('Valider').click();
      cy.url().should('include', '/facture');

      cy.wait(waitTime);
      cy.get('input[id="invoiceReference"]').type(randomInvoiceReference);
      cy.get('input[id="invoiceAmount"]').type(randomInvoiceAmount.toString());
      cy.get('button').contains('Valider').click();
      cy.url().should('include', '/proOuParticulier');

      cy.wait(waitTime);
      cy.get('button').contains('Professionnel').click();
      cy.url().should('include', '/choisirMoyenPayement/professionnel');
    }
  });
});
