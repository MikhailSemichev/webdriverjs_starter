const { describe, it, before, assert } = require('../../utils');
const HomePage = require('./HomePage');
const SearchResultsPage = require('../searchResultsPage/SearchResultsPage');

module.exports = (driver) => {
    describe('[Home Page]', () => {
        let homePage;
        const SEARCH_KEYWORDS = 'Funny Cats';

        before(() => {
            homePage = new HomePage(driver);
            return homePage.navigate();
        });

        it('should correctly load Google home page', async () => {
            await homePage.pageContent().isDisplayed();
            const footerLinks = await homePage.footerLinks();
            assert.isOk(footerLinks.length > 0, 'footer links should be present');
        });

        it(`should be able to search by keywords "${SEARCH_KEYWORDS}" and redirect to SearchResultsPage`, async () => {
            homePage.searchTxt().sendKeys(SEARCH_KEYWORDS);
            homePage.searchBtn().click();

            const searchResultsPage = new SearchResultsPage(driver);
            await searchResultsPage.waitResults();
        });
    });
};

