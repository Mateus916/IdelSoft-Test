
// Product Page Object
class ProductPage {
    searchProduct(productName) {
        cy.get('#search').type(`${productName}{enter}`);
    }

    addFirstProductToCart() {
        cy.get('.product-item').first().find('.action.tocart').click();
    }
}

export default ProductPage;
