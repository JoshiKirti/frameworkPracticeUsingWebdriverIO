import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'
import insideNavbar from '../pageObjects/componants/insideNavbar'
import paymentPage from '../pageObjects/pages/paymentPage'

describe('e2e payment', () => {
    it ('login with valid credentials', () => {
        App.openLoginPage()
        loginPage.login('username', 'password')
        navbar.navtabIsVisible()
    })

    it ('make payment', () => {
        insideNavbar.clickPayBills()
        const payee = paymentPage.payee
        payee.selectByAttribute('value', 'sprint')
        const account = paymentPage.account
        account.selectByVisibleText('Savings')
        paymentPage.setAmount('500')
        paymentPage.setDate('2021-04-06')
        paymentPage.setDesciption('test')
        paymentPage.clickSavedPayees()
        const successMsg = paymentPage.successMsg
        expect(successMsg).toHaveText('The payment was successfully submitted.')
    })
})