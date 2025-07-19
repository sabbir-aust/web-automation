import loginActions from './loginActions.js';

describe('Daraz Login', () => {
  it('Access the url, verify url and title', async () => {
    await browser.url('https://daraz.com.bd');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('daraz');
  });

  it('Verify invalid login page', async () => {
    await loginActions.verifyInvalidLogin();
    await browser.pause(5000);
  });

  it('Verify valid login page', async () => {
    await loginActions.verifyValidLogin();
    await browser.pause(5000);
  });

});
