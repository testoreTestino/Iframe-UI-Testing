

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('/html/body/div/section/section/div/form/div/div/div/div[1]/div[2]/div[1]/div/span/input');
    }

    get inputPassword () {
        return $('/html/body/div/section/section/div/form/div/div/div/div[2]/div[2]/div[1]/div/span/input');
    }

    get btnSubmit () {
        return $('/html/body/div/section/section/div/form/div/div/div/button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
