import Base from '../Base'

class navbar extends Base {
    get signinBtn() {
        return $('#signin_button')
    }

    get navtabs() {
        return $('.nav-tabs')
    }

    get settings(){
        return $('.icon-cog')
    }

    get help(){
        return $('#help_link')
    }

    get searchBox(){
        return $('#searchTerm')
    }

    signinBtnIsVisible() {
        this.signinBtn.waitForExist()
    }

    clickOnSigninBtn() {
        this.signinBtn.waitForExist()
        this.signinBtn.click()
    }

    navtabIsVisible() {
        this.navtabs.waitForExist()
    }

    clickSettings() {
        this.settings.waitForExist()
        this.settings.click()
    }

    clickHelp(){
        this.help.waitForExist()
        this.help.click()
    }

    clickSearchBox(text) {
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

}

export default new navbar()