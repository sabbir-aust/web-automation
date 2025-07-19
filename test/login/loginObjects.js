class LoginObjects {
  get loginBtn() {
    return $("//a[normalize-space()='Login']");
  }

  get emailInputField() {
    return $("//input[@placeholder='Please enter your Phone or Email']");
  }

  get passwordInputField() {
    return $("//input[@placeholder='Please enter your password']");
  }

  get clickLoginBtn() {
    return $("//button[normalize-space()='LOGIN']");
  }

  get getProfileSection() {
    return $("//span[@id='myAccountTrigger']");
  }

  get getErrorMsg() {
    return $("//div[@class='iweb-toast-wrap']");
  }
}

export default new LoginObjects();
