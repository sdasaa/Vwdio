import homePage from  '../pageobjects/home.page';
import allureReporter from '@wdio/allure-reporter';
import {expect} from "chai";

describe('To validate A Million More | Volvo Cars - International page - HeaderValidation', function () {
    let count:number;
    it('Validate the title', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("HomePage"),
        homePage.open();
        expect(browser.getTitle(), "The title of the page should be validated").to.contain("A million more | Volvo Cars - International");
    });

    it('Validate the header section of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.header.scrollIntoView();
        expect(homePage.hLogo.isDisplayed(), "The Volvo logo should be displayed in header").to.equal(true);
        expect(homePage.hCarsMenu.isDisplayed(), "The Volvo logo should be displayed in header").to.equal(true);
        expect(homePage.hSideNavigationMenu.isDisplayed(), "The Volvo logo should be displayed in header").to.equal(true);
    });

    it('validate the Cars Menu of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.hCarsMenu.click();
        homePage.carsMenuTabs[0].waitForDisplayed();
        expect(homePage.carsMenuTabs[0].isDisplayed(), "The Electric tab of CarsMenu should be displayed").to.equal(true);
        expect(homePage.carsMenuTabs[0].getText(), "The first tab should be Electric").to.contains("Electric");
        expect(homePage.carsMenuTabs[1].isDisplayed(), "The Hybrids tab of CarsMenu should be displayed").to.equal(true);
        expect(homePage.carsMenuTabs[1].getText(), "The second tab should be Hybrids").to.contains("Hybrids");
        expect(homePage.carsMenuTabs[2].isDisplayed(), "The Mild Hybrids tab of CarsMenu should be displayed").to.equal(true);
        expect(homePage.carsMenuTabs[2].getText(), "The last tab should be Mild Hybrids").to.contains("Mild hybrids");
    });

    it('Validate the Cars present in each tabs of CarMenu', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        count = homePage.validateCarMenu();
        expect(count, "All cars under each tab should be displayed").to.equal(16);
    });

    it('Validate the Site Navigation menu', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.siteNavLinksMenu.click();
        homePage.siteNavLinksMenuDrawer[0].waitForDisplayed();
        expect(homePage.siteNavLinksMenuDrawer[0].isDisplayed(), "The Buy tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[0].getText(), "The 1st tab of siteNavLinks menu should be Buy").to.contains("Buy");
        expect(homePage.siteNavLinksMenuDrawer[1].isDisplayed(), "The Own tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[1].getText(), "The 2nd tab of siteNavLinks menu should be Own").to.contains("Own");
        expect(homePage.siteNavLinksMenuDrawer[2].isDisplayed(), "The Why Volvo tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[2].getText(), "The 3rd tab of siteNavLinks menu should be Buy").to.contains("Why Volvo");
        expect(homePage.siteNavLinksMenuDrawer[3].isDisplayed(), "The Explore tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[3].getText(), "The 4th tab of siteNavLinks menu should be Buy").to.contains("Explore");
        expect(homePage.siteNavLinksMenuDrawer[4].isDisplayed(), "The More tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[4].getText(), "The 5th tab of siteNavLinks menu should be Buy").to.contains("More");
        expect(homePage.siteNavLinksMenuDrawer[5].isDisplayed(), "The International tab of siteNavLinks menu should be displayed").to.equal(true);
        expect(homePage.siteNavLinksMenuDrawer[5].getText(), "The 6th tab of siteNavLinks menu should be Buy").to.contains("International");
        expect(homePage.siteNavLinksMenuSocialIcons[0].getAttribute("href"), "The Facebook icon of siteNavLinks menu should be validated").to.contain("facebook");
        expect(homePage.siteNavLinksMenuSocialIcons[1].getAttribute("href"), "The Instagram icon of siteNavLinks menu should be validated").to.contain("instagram");
        expect(homePage.siteNavLinksMenuSocialIcons[2].getAttribute("href"), "The Twitter icon of siteNavLinks menu should be validated").to.contain("twitter");
        expect(homePage.siteNavLinksMenuSocialIcons[3].getAttribute("href"), "The Youtube icon of siteNavLinks menu should be validated").to.contain("youtube");
    });

    it('Should close the popups and Validate that the homepage is displayed', () => {
        allureReporter.addSeverity("critical");
        allureReporter.addFeature("Header");
        homePage.siteNavLinksMenuClose.click();
        homePage.carMenuClose.waitForDisplayed();
        homePage.carMenuClose.click();
        homePage.hLogo.waitForDisplayed();
        expect(homePage.hLogo.isDisplayed(), "The siteNavigation & Car Menu should closed").to.equal(true);
    });
});


