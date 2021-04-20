import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'
import helpPage from '../pageObjects/pages/helpPage'

describe('e2e - help section', () => {
    it ('login to the application', () => {
        App.openLoginPage()
        loginPage.login('username', 'password')
        navbar.navtabIsVisible()
    })

    it ('shd load the help content', () => {
        navbar.clickSettings()
        navbar.clickHelp()
        const title = helpPage.title
        expect(title).toHaveText('How do I log into my account?')
        helpPage.clickTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')
        helpPage.clickPayBills()
        expect(title).toHaveText('How do I pay bills?')
    })
})