const { describe, it, before, assert } = require('../../utils');
const SearchResultsPage = require('./SearchResultsPage');

module.exports = (driver) => {
    describe('[Search Results Page]', () => {
        let searchResultsPage;
        const SEARCH_KEYWORDS = 'WebdriverJS';

        before(() => {
            searchResultsPage = new SearchResultsPage(driver);
            return searchResultsPage.navigate(`?q=${SEARCH_KEYWORDS}`);
        });

        it('should correctly load Results Page results by direct link', async () => {
            const firstItemText = await searchResultsPage.firstResultItemLink().getText();
            assert.isOk(firstItemText.toLowerCase().indexOf(SEARCH_KEYWORDS.toLowerCase()) >= 0, 'relevant result');
        });

        it('should be able to show videos search and show video', () => {
            const tab = searchResultsPage.videosTab().click();
            searchResultsPage.firstResultItemLink().click();
            driver.sleep(7000);
        });
    });
};

