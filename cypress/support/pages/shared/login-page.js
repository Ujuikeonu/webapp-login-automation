export class LoginPage {
    visit() {
      cy.visit('URL_OF_YOUR_LOGIN_PAGE'); // Replace with the actual URL
    }
  
    usernameField(username) {
      cy.get('#username').type('username');
    }
  
    passwordField(password) {
      cy.get('#password').type('password');
    }
  
    clickLogin() {
      cy.get('#loginButton').click();
    }
    
    getErrorMessage() {
      return cy.get('#errorMessage');
    }

    // method to verify successful login, this could be checking the URL or an element on the dashboard
    verifySuccessfulLogin() {
    cy.url().should('include', '/dashboard'); // Replace with the actual URL part for the logged-in area
  }

    //method to verify the presence of a logout button
    verifyLogoutButton() {
    cy.get('#logoutButton').should('be.visible'); 
  }
  }

  

  