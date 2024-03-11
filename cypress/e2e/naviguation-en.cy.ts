describe('Navigation Flow (EN)', () => {
  it('Navigates through the app routes in order', () => {
    const waitTime = 1000; // Définir la variable de temps ici

    cy.visit('/');
    cy.wait(waitTime);
    cy.get('img.flag.flag-en').click();

    cy.wait(waitTime);
    cy.get('button').contains('PAY YOUR PUBLIC BILLS').click();
    cy.url().should('include', '/collectivite');

    cy.wait(waitTime);
    cy.get('input[id="publicStructureId"]').type('12345');
    cy.get('button').contains('Validate').click();
    cy.url().should('include', '/facture');

    cy.wait(waitTime);
    cy.get('input[id="invoiceReference"]').type('INV12345');
    cy.get('input[id="invoiceAmount"]').type('100');
    cy.get('button').contains('Validate').click();
    cy.url().should('include', '/proOuParticulier');

    cy.wait(waitTime);
    cy.get('button').contains('Professional').click();
    cy.url().should('include', '/choisirMoyenPayement/professionnel');
  });
});
