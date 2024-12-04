
// Test for product search
import ProductPage from '../pageObjects/ProductPage';

describe('Product Search', () => {
    it('should display results for a product search', () => {
        const productPage = new ProductPage();
        cy.visit('/');
        productPage.searchProduct('jacket');
        cy.contains('Search results for "jacket"').should('be.visible');
        cy.get('.product-item').should('have.length.greaterThan', 0);
    });
});
