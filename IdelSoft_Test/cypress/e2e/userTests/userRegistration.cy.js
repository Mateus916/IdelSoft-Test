
// Test for user registration
import UserPage from '../pageObjects/UserPage';

describe('User Registration', () => {
    const user = {
        firstname: 'John',
        lastname: 'Doe',
        email: `john.doe${Date.now()}@example.com`, // Unique email
        password: 'Password123'
    };

    it('should register a new user successfully', () => {
        const userPage = new UserPage();
        cy.visit('/');
        userPage.navigateToRegister();
        userPage.fillRegistrationForm(user);
        userPage.submitRegistration();
        cy.contains('Thank you for registering').should('be.visible');
    });
});
