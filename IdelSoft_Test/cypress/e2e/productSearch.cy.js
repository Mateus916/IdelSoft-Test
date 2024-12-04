
// Example test for product search
describe('Product Search', () => {
    it('should search for a product and display results', () => {
        cy.visit('/');
        cy.get('#search').type('jacket{enter}');
        cy.contains('Search results for "jacket"').should('be.visible');
        cy.get('.product-item').should('have.length.greaterThan', 0);
    });
});
