

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MMS extends Page {
    /**
     * define selectors using getter methods
     */

    get mmsPage(){
        return $('/html/body/div/section/aside/div/div/div[1]/ul/li[5]/div');
    }

    get mms(){
        return $('/html/body/div/section/aside/div/div/div[1]/ul/li[5]');
    }

    get iframeElement(){
        return $('/html/body/div/main/div/div[1]/h3');
    }

    get theCalendar(){
        return $('/html/body/div[1]/main/div/div[2]/div[2]/div/div[2]/div/div[1]/input');
    }

async accessPage(){
    await this.mmsPage.click();
    await this.mms.click();
}

async iframeActions(){

    browser.switchToFrame('app-mms');
    browser.pause(20000);
    
    await $(this.iframeElement).toBeDisplayed();
    await expect($button).toBeDisplayed();
    await expect($button).toHaveText('jjj');

    await this.theCalendar.click();

    browser.switchToParentFrame();
}

async doThat(){

$('/html/body/div/section/aside/div/div/div[1]/ul/li[4]/span[2]').click();

}}




module.exports = new MMS();
