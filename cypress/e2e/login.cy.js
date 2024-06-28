import { LoginPage } from "../support/pages";

const loginPage = new LoginPage();

describe('Login Test', () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it('Test that the user is able to login successfully with valid credentials', () => {
    const validEmail = '2310abh11@yopmail.com';
    const validPassword = 'Test@123';
    loginPage.login(validEmail, validPassword);
    // Assertion for successful login
    loginPage.verifySuccessfulLogin();

    //To verify the presence of a logout button
    // loginPage.verifyLogoutButton();
  });

it('Test that the user is unable to login with invalid password', () => {
  const validEmail = '2310abh11@yopmail.com';
  const invalidPassword = 'Test@1234';
  loginPage.login(validEmail, invalidPassword);
  //loginPage.getErrorMessage().should('be.visible').and('contain', 'Invalid Login Credentials');
  cy.contains('Invalid Login Credentials').should('be.visible');
});

})

