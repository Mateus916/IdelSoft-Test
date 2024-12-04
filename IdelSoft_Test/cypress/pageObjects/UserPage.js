
// User Page Object
class UserPage {
    navigateToRegister() {
        cy.get('.register-link').click();
    }

    fillRegistrationForm(user) {
        cy.get('#firstname').type(user.firstname);
        cy.get('#lastname').type(user.lastname);
        cy.get('#email_address').type(user.email);
        cy.get('#password').type(user.password);
        cy.get('#password-confirmation').type(user.password);
    }

    submitRegistration() {
        cy.get('.action.submit.primary').click();
    }

    login(email, password) {
        cy.visit('/customer/account/login/');
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.get('#send2').click();
    }
}

export default UserPage;
