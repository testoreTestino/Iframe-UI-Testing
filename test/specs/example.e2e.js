const LoginPage = require('../pageobjects/login.page');
const MMSPage = require('../pageobjects/mms.page');

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('62702', 'IExV4T');

    });

    it('Go to mms', async () => {
        await MMSPage.accessPage()
    });

    it('Hook to Iframe', async()=>{
        MMSPage.iframeActions();
    });

    it('Hoorame', async()=>{
        MMSPage.doThat();
    });    
});


