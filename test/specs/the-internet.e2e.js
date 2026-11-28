const { browser, $, expect } = require('@wdio/globals');

const BASE = 'https://the-internet.herokuapp.com';

describe('The Internet website tests', () => {
  it('Home page opens', async () => {
    await browser.url(BASE);
    await expect(browser).toHaveTitle('The Internet');
    await expect($('h1')).toHaveText(expect.stringContaining('Welcome')); // CSS tag
  });

  it('Login with valid data', async () => {
    await browser.url(`${BASE}/login`);
    await $('#username').setValue('tomsmith'); // id
    await $('#password').setValue('SuperSecretPassword!'); // id
    await $('button[type="submit"]').click(); // CSS attribute
    await expect(browser).toHaveUrl(expect.stringContaining('/secure'));
    await expect($('#flash')).toHaveText(expect.stringContaining('You logged into a secure area!'));
  });

  it('Login with wrong password', async () => {
    await browser.url(`${BASE}/login`);
    await $('#username').setValue('tomsmith');
    await $('#password').setValue('wrong');
    await $('//button[@type="submit"]').click(); // XPath
    await expect($('//div[@id="flash"]')).toHaveText(expect.stringContaining('Your password is invalid!')); // XPath
  });

  it('Checkbox can be selected', async () => {
    await browser.url(`${BASE}/checkboxes`);
    const first = await $('(//input[@type="checkbox"])[1]'); // XPath
    await first.click();
    await expect(first).toBeSelected();
  });

  it('Add Element button works', async () => {
    await browser.url(`${BASE}/add_remove_elements/`);
    await $('button=Add Element').click(); // WebdriverIO text selector
    await expect($('.added-manually')).toExist(); // CSS class
  });
});