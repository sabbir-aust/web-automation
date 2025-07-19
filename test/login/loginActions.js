import loginObjects from './loginObjects.js';

class LoginActions {

  async verifyInvalidLogin(){
    const login = await loginObjects.loginBtn;
    await login.click();
    await browser.pause(3000);
    const emailInputField = await loginObjects.emailInputField;
    const passwordInputField = await loginObjects.passwordInputField;
    const clickLoginBtn = await loginObjects.clickLoginBtn;

    await emailInputField.setValue("ajgdadh");
    await passwordInputField.setValue("dkasd");
    await clickLoginBtn.click();

    const getErrorMsg = await loginObjects.getErrorMsg;
    expect(await getErrorMsg.getText()).toContain("Please enter a valid phone number.");

  }

  async verifyValidLogin(){
    
    const emailInputField = await loginObjects.emailInputField;
    const passwordInputField = await loginObjects.passwordInputField;
    const clickLoginBtn = await loginObjects.clickLoginBtn;

    expect(await emailInputField.isDisplayed()).toBe.true;
    await emailInputField.setValue("01771883344");

    expect(await passwordInputField.isDisplayed()).toBe.true;
    await passwordInputField.setValue("Sabbir@33");
    await clickLoginBtn.click();

    const getProfileSection = await loginObjects.getProfileSection;
    expect(await getProfileSection.isDisplayed()).toBe.true;

  }
}

export default new LoginActions();
