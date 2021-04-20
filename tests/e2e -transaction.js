import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'
import insideNavbar from '../pageObjects/componants/insideNavbar'
import transactionPage from '../pageObjects/pages/transactionPage'

describe('e2e - find transaction', () => {
    it ('login to the application', () => {
        App.openLoginPage()
        loginPage.login('username', 'password')
        navbar.navtabIsVisible()
    })

    it ('transaction filter shd work', () => {
        insideNavbar.clickAccountActivityTab()
        insideNavbar.clickTransactionsTab()
        transactionPage.setDescription('test')
        // $('#aa_type').selectByAttribute('value', 'DEPOSIT')
        transactionPage.clickSubmitBtn()
        const errorMsg = transactionPage.errorMsg
        expect(errorMsg).toHaveText('No results.')
    })
})