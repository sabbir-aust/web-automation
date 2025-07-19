class AddToCartObjects {

  get getShopAllBtn() {
    return $("//span[normalize-space()='SHOP ALL PRODUCTS']");
  }

  get getItem() {
    return $("//a[2]//div[1]//div[2]//div[1]");
  }

  get getItemAddToCartBtn() {
    return $("//button[contains(@class,'pdp-button pdp-button_type_text pdp-button_theme_orange pdp-button_size_xl')]//span[contains(@class,'pdp-button-text')]");
  }

  get getItemAddToCartMsg() {
    return $("//span[@class='cart-message-text']");
  }

  get getClosePopUp() {
    return $("//i[@class='next-icon next-icon-close next-icon-small']");
  }

  get getAddToCartBtn() {
    return $("//span[@class='cart-icon-daraz']");
  }

  get getSelectAllItem() {
    return $("//label[@class='next-checkbox list-header-checkbox ']//input[@type='checkbox']");
  }

  get getProceedToCheckout() {
    return $("//button[normalize-space()='PROCEED TO CHECKOUT (1)']");
  }
}

export default new AddToCartObjects();
