import homePage from  '../pageobjects/home.page';
import allureReporter from '@wdio/allure-reporter';
import {expect} from "chai";

describe('To validate A Million More | Volvo Cars - International page - FooterValidation', function () {
    let count:number;
    it('Validate the title', () => {
        allureReporter.addSeverity("critical");
        allureReporter.addFeature("OpenURL");
        homePage.open();
        expect(browser.getTitle(), "The title of the page should be validated").to.contain("A million more | Volvo Cars - International");
    });

    it('Should validate the exploreOurModels section of homePage', () => {
        allureReporter.addSeverity("High");
        allureReporter.addFeature("validateExploreOurModels");
        homePage.exploreModelsCarousel.waitForDisplayed();
        homePage.exploreModelsCarousel.scrollIntoView();
        expect(homePage.validateExploreOurModels(), "The exploreOurModels section should be displayed & validated").to.equal(true);
        expect(homePage.exploreModelsCarouselItem.length, "The exploreOurModels section should be displayed & validated").to.equal(8);
    });

    it('Should validate the footer links and Copyrights info', () => {
        allureReporter.addSeverity("High");
        allureReporter.addFeature("footer");
        homePage.footer.waitForDisplayed();
        homePage.footer.scrollIntoView();
        expect(homePage.footerLinks[0].getText(), "The footerLink Cookies should displayed").to.equal("Cookies");
        expect(homePage.footerLinks[1].getText(), "The footerLink Legal should displayed").to.equal("Legal");
        expect(homePage.footerLinks[2].getText(), "The footerLink Privacy should displayed").to.equal("Privacy");
        expect(homePage.footerLinks[3].getText(), "The footerLink Social Media should displayed").to.equal("Social Media");
        expect(homePage.footerCopyright.getText(), "The footerLink copyright info should displayed")
        .to.contain("Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)");
    });
});


