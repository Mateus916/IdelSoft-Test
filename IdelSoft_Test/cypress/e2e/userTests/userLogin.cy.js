
// Test for user login
import UserPage from '../pageObjects/UserPage';

describe('User Login', () => {
    it('should login successfully', () => {
        const userPage = new UserPage();
        cy.fixture('user.json').then((user) => {
            userPage.login(user.email, user.password);
            cy.contains('Welcome, ' + user.firstname).should('be.visible');
        });
    });
});
