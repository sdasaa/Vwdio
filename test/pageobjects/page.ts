/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    *   @description To Launch the URL, maximize window and acceptCookies
    */
    open () {
        browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        browser.maximizeWindow();
        this.acceptCookies();
    }

    /**
    *   @description To acceptCookies
    */
    acceptCookies () {
        browser.$('div.optanon-alert-box-bg').waitForDisplayed();
        browser.$('div.optanon-button-allow').waitForDisplayed();
        browser.$('div.optanon-button-allow').click();
        browser.$(`nav[role*='navigation'] a[href='/intl']`).waitForDisplayed();
    }
}
