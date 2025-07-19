import addToCartObjects from './addToCartObjects.js';

class AddToCartActions {

  async verifyAddToCart(){
    const getShopAllBtn = await addToCartObjects.getShopAllBtn;
    await getShopAllBtn.click();
    await browser.pause(3000);

    const getItem = await addToCartObjects.getItem;
    await getItem.click();
    await browser.pause(3000);

    const getItemAddToCartBtn = await addToCartObjects.getItemAddToCartBtn;
    expect(await getItemAddToCartBtn.isDisplayed()).toBe.true;
    await getItemAddToCartBtn.click();
    await browser.pause(3000);

    const getItemAddToCartMsg = await addToCartObjects.getItemAddToCartMsg;
    expect(await getItemAddToCartMsg.isDisplayed()).toBe.true;
    const itemAddToCartMsg = await getItemAddToCartMsg.getText();
    expect(itemAddToCartMsg).toContain("Added to cart successfully!");
    await getItemAddToCartBtn.click();
    await browser.pause(3000);

    const getClosePopUp = await addToCartObjects.getClosePopUp;
    await getClosePopUp.click();
    await browser.pause(3000);

    const getAddToCartBtn = await addToCartObjects.getAddToCartBtn;
    await getAddToCartBtn.click();
    await browser.pause(3000);

    const getSelectAllItem = await addToCartObjects.getSelectAllItem;
    await getSelectAllItem.click();
    await browser.pause(3000);

    const getProceedToCheckout = await addToCartObjects.getProceedToCheckout;
    await getProceedToCheckout.click();
  }

}

export default new AddToCartActions();
