const BasePageObject = require('../../BasePageObject');

class SearchResultsPage extends BasePageObject {
    constructor(driver) {
        super(driver, { url: '/search' });
    }

    waitResults() {
        return this.waitOne(['.g']);
    }

    resultItems() {
        return this.$$('.g');
    }

    firstResultItemLink() {
        return this.$('.g .r a');
    }

    videosTab() {
        // bad practice use classes or data-xxx attributes in html
        return this.$('.hdtb-mitem:nth-child(3) a');
    }

    searchTxt() {
        return this.$('[name="q"]');
    }

    searchBtn() {
        return this.$('[name="btnK"]');
    }
}

module.exports = SearchResultsPage;
