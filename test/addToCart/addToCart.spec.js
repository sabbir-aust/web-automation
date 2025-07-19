import addToCartActions from './addToCartActions.js';
import loginActions from './loginActions.js';


describe('Add a product to the cart', () => {
  it('Access the url and login', async () => {
    await browser.url('https://daraz.com.bd');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('daraz');
    await loginActions.verifyValidLogin();
  });

  it('Verify Registration page', async () => {
    await addToCartActions.verifyAddToCart();
    await browser.pause(5000);
  });
});
