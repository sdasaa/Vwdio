import Page from './page';

/**
 * HomePage - A Million More | Volvo Cars - International page
 */
class HomePage extends Page {

    /**
     * @description Homepage - header
     */
    public get header () {
        return $(`nav[role='navigation']`);
    }
    /**
     * @description Homepage - header logo
     */
     public get hLogo () {
        return this.header.$(`img`);
    }
    /**
     * @description Homepage - header carsMenu
     */
     public get hCarsMenu () {
        return this.header.$(`[id*='Car']`);
    }
    /**
     * @description Homepage - header SideNavigationMenu
     */
     public get hSideNavigationMenu () {
        return this.header.$(`[id*='NavSideNavToggle']`);
    }
    /**
     * @description Homepage - carsMenuTabs
     */
     public get carsMenuTabs () {
        return $$(`div[role='tablist'] button`);
    }
    /**
     * @description Homepage - videoPanel
     */
     public get videoPanel () {
        return $(`[data-component='Video']`);
    }
    /**
     * @description Homepage - watchMyStory
     */
     public get watchMyStory () {
        return this.videoPanel.$$(`button`);
    }
    /**
     * @description Homepage - getCarMenuTabPanel
     */
     public getCarMenuTabPanel (index:number) {
        return $(`div[id*='cars-menu-section-panel-${index}']`);
    }
    /**
     * @description Homepage - carMenuTabCars
     */
     public get carMenuTabCars () {
        return $$(`div[class*='_SiteNav-ix']`);
    }
    /**
     * @description Homepage - carMenuClose
     */
     public get carMenuClose () {
        return $(`[data-autoid*='carMenuCloseButton']`);
    }
    /**
     * @description Homepage - siteNavLinksMenu
     */
     public get siteNavLinksMenu () {
        return $(`nav[role*='navigation'] button[id='nav:siteNavSideNavToggle']`);
    }
    /**
     * @description Homepage - siteNavLinksMenuDrawer
     */
     public get siteNavLinksMenuDrawer () {
        return $$(`div[class*='_SiteNav-a _SiteNav-fy'] button`);
    }
    /**
     * @description Homepage - siteNavLinksMenuSocialIcons
     */
     public get siteNavLinksMenuSocialIcons () {
        return $$(`div[class*='SiteNav_sideNavigationSocialLinks'] a`);
    }
    /**
     * @description Homepage - siteNavLinksMenuClose
     */
     public get siteNavLinksMenuClose () {
        return $(`[data-autoid*='siteNavCloseIcon']`);
    }
    /**
     * @description Homepage - modelIntro
     */
     public get modelIntro () {
        return $(`section[data-autoid='ModelIntro']`);
    }
    /**
     * @description Homepage - textStatement
     */
     public get textStatement () {
        return $(`div[data-component='TextStatement']`);
    }
    /**
     * @description Homepage - features
     */
     public get features () {
        return $$(`div[class*='fn']>div`);
    }
    /**
     * @description Homepage - moreAboutCarSafety
     */
     public get moreAboutCarSafety () {
        return $(`a[href='/intl/v/car-safety']`);
    }
    /**
     * @description Homepage - videoTestimonials
     */
     public get videoTestimonials () {
        return $$(`div[data-autoid*='videoTestimonials:container']`);
    }
    /**
     * @description Homepage - decadesOfInnovationLearnMore
     */
     public get decadesOfInnovationLearnMore () {
        return $(`a[href='/intl/v/car-safety/safety-heritage']`);
    }
    /**
     * @description Homepage - exploreModelsCarousel
     */
     public get exploreModelsCarousel () {
        return $(`div[data-component='ProductListCarousel']`);
    }
    /**
     * @description Homepage - exploreModelsCarouselItem
     */
     public get exploreModelsCarouselItem () {
        return $$(`[data-autoid*=':carouselItem']`); 
    }
    /**
     * @description Homepage - exploreModelsNext
     */
     public get exploreModelsNext () {
        return $(`button[data-autoid='springCarouselNextButton']`);
    }
    /**
     * @description Homepage - footer
     */
     public get footer () {
        return $(`div[class*='_SiteFooter-_chmmuv']`);
    }
    /**
     * @description Homepage - footerLinks
     */
     public get footerLinks () {
        return this.footer.$$(`a`);
    }
    /**
     * @description Homepage - footerCopyright
     */
     public get footerCopyright () {
        return $(`[data-autoid='footer:copyright']`);
    }
    /**
     *  @description To Launch the URL and maximize window
     */
    open () {
        super.open();
    }
    /**
     * @description To validate CarMenu section of homePage
     */
     public validateCarMenu() {
        let index = 0;
        let count = 0;
        let cars:WebdriverIO.ElementArray;
        this.carsMenuTabs.forEach((tab) =>{
            tab.waitForDisplayed();
            tab.click();
            this.getCarMenuTabPanel(index).waitForDisplayed();
            cars = this.getCarMenuTabPanel(index).$$(`a[data-autoid='nav:carContainer']`);
            console.log("Count =============> "+cars.length);
            count = count + cars.length;
            console.log("Total count: "+count);
            index ++;
        });
        return count;
    }
    /**
     * @description To validate WatchMyStory section of homePage
     */
     public validateWatchMyStory () {
        let flag = false;
        this.videoPanel.scrollIntoView();
        this.watchMyStory[1].waitForClickable();
        this.watchMyStory[1].click();
        browser.waitUntil(() => this.videoPanel.$(`iframe`).isDisplayed(),
        {
            timeout: 5000,
            timeoutMsg: 'Video didnt start playing after 5s'
        });
        if(this.videoPanel.$(`iframe`).isDisplayed())
            flag = true;
        return flag;
    }
    /**
     * @description To validate Testimonials section of homePage
     */
     public validateTestimonials () {
        let count = 0;
        let flag = false;
        this.videoTestimonials[this.videoTestimonials.length-1].waitForDisplayed();
        this.videoTestimonials[this.videoTestimonials.length-1].scrollIntoView();
        this.videoTestimonials.forEach((video) =>{
            video.waitForDisplayed();
            video.scrollIntoView();
            video.$(`button`).click();
            browser.waitUntil(() => video.$(`[controls]`).isDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Video didnt start playing after 5s'

            });
            if(video.$(`[controls]`).isDisplayed())
                count ++;      
        });
        if(count == 4)
            flag = true;
        return flag;
    }
    /**
     * @description To validate ExploreOurModels section of homePage
     */
    public validateExploreOurModels() {
        let count = 0;
        let flag = false;

        this.exploreModelsCarouselItem.forEach((item) => {
            item.scrollIntoView();
            console.log(item.getText());
            if(item.getText().includes("LEARN" && "SHOP"))
                count ++;            
        });
        if(count == 8)
            flag = true;
        return flag;
    }
    
}

export default new HomePage();
