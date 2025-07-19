class RegistraionObjects {

  get getRegistrationBtn() {
    return $("//a[normalize-space()='Sign Up']");
  }

  get getSignUpTitle() {
    return $("//div[contains(@class,'index_module_registryTitle')]");
  }

  get getMobileInput() {
    return $("//input[@placeholder='Please enter your phone number']");
  }

  get getPrivacyCheckbox() {
    return $("//div[@class='iweb-checkbox-icon iweb-checkbox-icon--box']");
  }

  get getSendCodeBtn() {
    return $("//button[@class='iweb-button iweb-button-primary index_module_otpRegistryButton__29218978 index_module_otpRegistryButton__29218978']//div[@class='iweb-button-mask']");
  }
}

export default new RegistraionObjects();
