import registrationObjects from './registrationObjects.js';

class RegistraionActions {

  async verifyRegistration(){
    const registraionBtn = await registrationObjects.getRegistrationBtn;
    await registraionBtn.click();
    await browser.pause(3000);
    const registraionPageTitle = await registrationObjects.getSignUpTitle;
    const registraionPageTitleText = await registraionPageTitle.getText();
    expect(registraionPageTitleText).toContain("Sign up");

    const mobileInput = await registrationObjects.getMobileInput;
    const checkBox = await registrationObjects.getPrivacyCheckbox;
    const sendCodeBtn = await registrationObjects.getSendCodeBtn;

    await mobileInput.click();
    await mobileInput.addValue(1302700626);
    await checkBox.click();
    await sendCodeBtn.click();

    await browser.pause(3000);
  }

}

export default new RegistraionActions();
