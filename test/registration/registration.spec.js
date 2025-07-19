import registrationActions from './registrationActions.js';

describe('Daraz Registraion page', () => {
  it('Access the url, verify url and title', async () => {
    await browser.url('https://daraz.com.bd');
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain('daraz');
  });

  it('Verify Registration page', async () => {
    await registrationActions.verifyRegistration();
    await browser.pause(5000);

  });
});
