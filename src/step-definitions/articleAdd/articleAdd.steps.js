const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const ArticleAdd = require('../../pageobjects/articleAdd/articleAdd.page');
const LoginPage = require('../../pageobjects/login/login.page');



Given('I am logged in to Saucedemo', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    // Paso para iniciar sesión en Saucedemo
Given('I am logged in to Saucedemo', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    // Espera a que la URL cambie a la página de inventario
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

    // Verifica que el header está visible
    const isHeaderVisible = await ArticleAdd.isHeaderVisible();
    expect(isHeaderVisible).toBe(true);
});

// Paso para agregar un artículo al carrito
When('I add an item {string} to the cart', async (itemName) => {
    await ArticleAdd.addItemToCart(itemName);
});

// Paso para verificar que el artículo esté en el carrito
Then('I should see the item {string} in the cart', async (itemName) => {
    await ArticleAdd.verifyItemInCart(itemName);
});

});