import AttributesQueries from '../support/attributes_queries.js'

describe('Check query for string type attributes', () => {
  it('should navigate to the target page, capture text, and compare it to "xx"', () => {
    // Visit the target web page
    cy.visit('http://localhost:8080/');

    // Find the specific element containing text
    cy.get('.code-query').should('be.visible');
    cy.get('.code-query').invoke('text').then((capturedText) => {
    const cleanedCapturedText = capturedText.replace(/[\s\n]/g, "")
      // Compare the captured text with the expected text
      expect(cleanedCapturedText.trim()).to.equal(AttributesQueries.attribute_string);
    });
  });
});