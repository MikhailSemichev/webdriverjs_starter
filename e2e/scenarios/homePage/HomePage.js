const BasePageObject = require('../../BasePageObject');

class HomePage extends BasePageObject {
    constructor(driver) {
        super(driver, { url: '/' });
    }

    pageContent() {
        return this.$('.content');
    }

    footerLinks() {
        return this.$$('.fbar a');
    }

    searchTxt() {
        return this.$('[name="q"]');
    }

    searchBtn() {
        return this.$('[name="btnK"]');
    }
}

module.exports = HomePage;
