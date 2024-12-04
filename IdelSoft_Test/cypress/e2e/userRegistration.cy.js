
// Example test for user registration
describe('User Registration', () => {
    it('should register a new user successfully', () => {
        cy.visit('/');
        cy.get('.register-link').click();
        cy.get('#firstname').type('John');
        cy.get('#lastname').type('Doe');
        cy.get('#email_address').type('john.doe@example.com');
        cy.get('#password').type('Password123');
        cy.get('#password-confirmation').type('Password123');
        cy.get('.action.submit.primary').click();
        cy.contains('Thank you for registering').should('be.visible');
    });
});
