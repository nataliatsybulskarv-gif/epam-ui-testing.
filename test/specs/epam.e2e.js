
const { expect } = require('@wdio/globals');

const AboutPage = require('../pageobjects/about.page');
const ServicesPage = require('../pageobjects/services.page');

describe('EPAM website tests', () => {

    it('should open About page', async () => {
        await AboutPage.open('about');

        await expect(AboutPage.heading).toBeDisplayed();
        await expect(AboutPage.heading).toHaveText('About');
    });

    it('should open Services page', async () => {
        await ServicesPage.open('services');

        await expect(ServicesPage.heading).toBeDisplayed();
        
    });

});










