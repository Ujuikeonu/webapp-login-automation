import {LoginPge} from "../support/pages/index";

const loginPage = new LoginPage();

describe('Login Test',()=>{

  beforeEach(() =>{
   loginPage.visit(); 
  })

  it('Test that the user is able to Login successfully with valid credentials', () =>{
    loginPage.usernameField('validUsername');//insert valid username
    loginPage.passwordField('validPassword');
    loginPage.clickLogin();
    // Assertion for successful login
    loginPage.verifySuccessfulLogin();
    // Alternatively, verify the presence of a logout button
    loginPage.verifyLogoutButton();
  })

  it('Test that the user is unable to login with invalid credentials', () =>{
    loginPage.usernameField('invalidUsername'); // Replace with invalid username
    loginPage.passwordField('invalidPassword'); // Replace with invalid password
    loginPage.clickLogin();
    //assert that error message is visible and its content
    loginPage.getErrorMessage().should('be.visible').and('contain', 'Invalid credentials'); // Adjust the error message as per your application
  })

  it('Test that a descriptive error message is displayed when login fails', () =>{
    loginPage.usernameField('invalidUsername'); // Replace with invalid username
    loginPage.passwordField('invalidPassword'); // Replace with invalid password
    loginPage.clickLogin();
    //Assert that the error message is visible
    loginPage.getErrorMessage().should('be.visible');
  })
})
