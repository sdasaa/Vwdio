import homePage from  '../pageobjects/home.page';
import allureReporter from '@wdio/allure-reporter';
import {expect} from "chai";

describe('To validate A Million More | Volvo Cars - International page - HomePageValidation', function () {
    it('Should validate the VideoPanel', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("HomePage"),
        homePage.open();
        expect(browser.getTitle(), "The title of the page should be validated").to.contain("A million more | Volvo Cars - International");
    });

    it('Should play & validate the watchMyStory video of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.modelIntro.waitForDisplayed();
        homePage.modelIntro.scrollIntoView();        
        homePage.videoPanel.scrollIntoView();
        homePage.watchMyStory[1].waitForDisplayed();
        homePage.watchMyStory[1].scrollIntoView();
        expect(homePage.validateWatchMyStory(), "The WatchMyStory vide should be displayed & played").to.equal(true);
        expect(homePage.modelIntro.isDisplayed(), "The modelIntro should be displayed in homePage").to.equal(true);
        expect(homePage.modelIntro.getText(),"The modelIntro should be displayed in homePage")
        .to.contain("Ideas that change the world are often the most controversial.");
        expect(homePage.videoPanel.isDisplayed(), "The videoPanel should be displayed in homePage").to.equal(true);
    });

    it('Should validate the textStatement & features of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.textStatement.waitForDisplayed();
        homePage.textStatement.scrollIntoView();
        homePage.textStatement.click();
        homePage.features[homePage.features.length-1].waitForDisplayed();
        homePage.features[homePage.features.length-1].scrollIntoView();
        homePage.moreAboutCarSafety.waitForDisplayed();
        expect(homePage.textStatement.getText(), "The textStatement should be displayed in homePage")
        .to.contain("A million more. With new and existing safety features, we are determined to save a million more lives.");
        expect(homePage.features[0].getText(), "The Speed cap feature should be displayed & validated").to.contain("Speed cap");
        expect(homePage.features[1].getText(), "The Highway pilot feature should be displayed & validated").to.contain("Highway pilot");
        expect(homePage.features[2].getText(), "The Driver monitoring cameras feature should be displayed & validated").to.contain("Driver monitoring cameras");
        expect(homePage.features[3].getText(), "The Care Key feature should be displayed & validated").to.contains("Care Key");
        expect(homePage.moreAboutCarSafety.getAttribute("href"), "The more about car safety link should be displayed & validated").to.contains("car-safety");
    });

    it('Should play & validate all the VideoTestimonials of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.videoTestimonials[homePage.videoTestimonials.length-1].waitForDisplayed();
        homePage.videoTestimonials[homePage.videoTestimonials.length-1].scrollIntoView();
        expect(homePage.validateTestimonials(), "All 4 videoTestimonials should be displayed & played").to.equal(true);
        expect(homePage.videoTestimonials.length, "There should be a total of 4 videoTestimonials displayed").to.equal(4);
        expect(homePage.videoTestimonials[0].isDisplayed(), "All videoTestimonials should be displayed").to.equal(true);
        expect(homePage.videoTestimonials[1].isDisplayed(), "All videoTestimonials should be displayed").to.equal(true);
        expect(homePage.videoTestimonials[2].isDisplayed(), "All videoTestimonials should be displayed").to.equal(true);
        expect(homePage.videoTestimonials[3].isDisplayed(), "All videoTestimonials should be displayed").to.equal(true); 
    });

    it('Validate decadesOfInnovation section of homePage', () => {
        allureReporter.addSeverity("critical"),
        allureReporter.addFeature("Header"),
        homePage.decadesOfInnovationLearnMore.scrollIntoView();
        homePage.decadesOfInnovationLearnMore.waitForDisplayed();
        expect(homePage.decadesOfInnovationLearnMore.isDisplayed(), "The decadesOfInnovationshould be displayed in homePage").to.equal(true);
        expect(homePage.decadesOfInnovationLearnMore.getAttribute("href"), "The decadesOfInnovation should be contain a link about safety-heritage").to.contain("safety-heritage");
    });
});


