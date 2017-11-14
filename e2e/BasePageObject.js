const { config, until, By } = require('./utils');

class BasePageObject {
    constructor(driver, options) {
        this.driver = driver;
        this.options = options || {};
    }

    async navigate(query) {
        await this.driver.get(`${config.baseUrl}${this.options.url || ''}${query || ''}`);
        // Use this line for # navigation
        // await this.driver.get(`${config.baseUrl}/#${this.options.url}`);

        // Notify client code that test is started
        return this.driver.executeScript('window.E2E_TESTS_MODE = true;');
    }

    $(selector, wait = true) {
        wait && this.driver.wait(until.elementLocated(By.css(selector)));
        return this.driver.findElement(By.css(selector));
    }

    $$(selector, wait = true) {
        wait && this.driver.wait(() => this.isPresent(selector));
        return this.driver.findElements(By.css(selector));
    }

    isPresent(selector) {
        return this.driver.findElements(By.css(selector))
            .then(elements => elements.length > 0);
    }

    waitOne(selectors = []) {
        return this.driver.wait(async () => {
            for (let i = 0; i < selectors.length; i++) {
                const result = await this.isPresent(selectors[i]);
                if (result) return true;
            }
            return false;
        });
    }

    waitForLoading() {
        return this.driver.wait(() => this.isPresent('.loading-spinner').then(visible => !visible));
    }

    scrollToElement(element) {
        this.driver.executeScript('arguments[0].scrollIntoView(false);', element);
    }
}

module.exports = BasePageObject;
