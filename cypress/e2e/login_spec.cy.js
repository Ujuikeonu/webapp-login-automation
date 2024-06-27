import { LoginPage } from "../support/pages";

const loginPage = new LoginPage();

describe('Login Test',()=>{

  beforeEach(() =>{
   loginPage.visit(); 
  })

  it('Test that the user is able to Login successfully with valid credentials', () =>{
    loginPage.usernameField('username');
    loginPage.passwordField('password');
    loginPage.clickLogin();
    //Assertion for successful login
    loginPage.verifySuccessfulLogin();
    //To verify the presence of a logout button
    loginPage.verifyLogoutButton();
  })

  it('Test that the user is unable to login with invalid credentials', () =>{
    loginPage.usernameField('invalidUsername'); 
    loginPage.passwordField('invalidPassword');
    loginPage.clickLogin();
    //Assert that error message is visible and its content
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Invalid credentials');
  })

  it('Test that a descriptive error message is displayed when login fails', () =>{
    loginPage.usernameField('invalidUsername');
    loginPage.passwordField('invalidPassword');
    loginPage.clickLogin();
    //Assert that the error message is visible
    loginPage.getErrorMessage().should('be.visible');
  })
})
