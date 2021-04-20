import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'
import insideNavbar from '../pageObjects/componants/insideNavbar'
import exchangePage from '../pageObjects/pages/exchangePage'

describe('e2e - currency exchange', () => {
    it ('login to the application', () => {
        App.openLoginPage()
        loginPage.login('username', 'password')
        navbar.navtabIsVisible()
    })

    it ('shd make currency exchange', () => {
        insideNavbar.clickPayBills()
        insideNavbar.clickExchange()
        const currency = insideNavbar.currency
        currency.selectByAttribute('value', 'CAD')
        exchangePage.setAmount('500')
        exchangePage.clickDollars()
        exchangePage.clickCash()
        const successMsg = exchangePage.successMsg
        expect(successMsg).toHaveText('Foreign currency cash was successfully purchased.')
    })
})