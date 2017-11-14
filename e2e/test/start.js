const webdriver = require('selenium-webdriver');
const { describe, before, after, beforeEach, afterEach, config, fixClickBehavior } = require('../utils');

require('chromedriver');

describe('E2E', function () { // eslint-disable-line
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    this.timeout(config.TIMEOUT);
    fixClickBehavior(driver);

    before(async () => {
        // Login
    });

    describe('Scenarios', () => {
        require('../scenarios/homePage/test')(driver);
        require('../scenarios/searchResultsPage/test')(driver);
    });

    after(() => {
        driver.quit();
    });

    // DELAY
    const DELAY = 1000;
    beforeEach(() => {
        return driver.sleep(DELAY);
    });
    afterEach(() => {
        return driver.sleep(DELAY);
    });
    //
});

