
// Test for shopping cart management
import ProductPage from '../pageObjects/ProductPage';

describe('Cart Management', () => {
    it('should add a product to the cart and verify', () => {
        const productPage = new ProductPage();
        cy.visit('/');
        productPage.searchProduct('jacket');
        productPage.addFirstProductToCart();
        cy.contains('You added').should('be.visible');
        cy.get('.action.showcart').click();
        cy.contains('jacket').should('be.visible');
    });
});
