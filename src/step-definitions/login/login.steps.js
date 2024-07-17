const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../../pageobjects/login/login.page');

const pages = {
    login: LoginPage
}


Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
    await browser.waitUntil(
        async () => {
            const url = await browser.getUrl();
            return url === 'https://www.saucedemo.com/inventory.html';
        },
        {
            timeout: 5000,
            timeoutMsg: 'expected url to be different after 5s'
        }
    );
});

When('I login with invalid credentials {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see the inventory page', async () => {
    const url = await browser.getUrl();
    expect(url).toBe('https://www.saucedemo.com/inventory.html');
});

Then('I should see an error message', async () => {
    const geterrorMessage = await LoginPage.errorMessage();
    expect(geterrorMessage).toBeDisplayed();
});
