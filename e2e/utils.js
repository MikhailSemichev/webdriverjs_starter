const { describe, it, afterEach, beforeEach, before, after } = require('selenium-webdriver/testing');
const webdriver = require('selenium-webdriver');
const argv = require('yargs').argv;

const By = webdriver.By;
const until = webdriver.until;
const expect = require('chai').expect;
const assert = require('chai').assert;
const Key = webdriver.Key;
const WebElement = webdriver.WebElement;

const config = require('./config/config_dev');

module.exports = {
    describe,
    it,
    afterEach,
    before,
    beforeEach,
    after,
    By,
    Key,
    until,
    expect,
    assert,
    config,
    fixClickBehavior
};

function fixClickBehavior(driver) {
    const nativeClick = WebElement.prototype.click;

    WebElement.prototype.click = function overrideClick() {
        return nativeClick.apply(this).then(
            r => r,
            ex => driver.executeScript('arguments[0].click();', this)
        );
    };
}
