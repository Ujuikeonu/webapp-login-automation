export class LoginPage {
  usernameField = () => cy.get('#username');
  // usernameField = () => cy.get('#email');
  passwordField = () => cy.get('#password');
  loginButton = () => cy.get('#loginButton').contains("Login");
  //loginButton = () => cy.get('form.ng-dirty > .btn').contains("Login");

  accessLoginModal() {
    cy.visit('/');
  }

  clickLogin = () => {
    return this.loginButton().click({ force: true });
  };

  login = (username, password) => {
    this.usernameField().type(username);
    this.passwordField().type(password);
    return this.clickLogin();
  };
  // login = (email, password) => {
  //   this.usernameField().type(email);
  //   this.passwordField().type(password);
  //   return this.clickLogin();
  // };

  verifySuccessfulLogin() {
    cy.contains('Login Successful').should('be.visible');
    //cy.get('app-progress-dialog > .container').contains('Just a moment').should('be.visible');
  }


  getErrorMessage() {
    return cy.get('#errorMessage');
  }

  verifyLogoutButton() {
    cy.get('#logoutButton').should('be.visible');
  }
}

  

  