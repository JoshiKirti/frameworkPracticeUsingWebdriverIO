import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'

describe('Login and Logout Journey', () => {
    it ('login using invalid credentials', () => {
        App.openHomepage()
        navbar.clickOnSigninBtn()
        loginPage.login('invalid', 'invalid')
        const errorMsg = loginPage.error
        expect(errorMsg).toHaveText('Login and/or password are wrong.')
    })

    it ('login with valid credentials', () => {
        App.openHomepage()
        navbar.clickOnSigninBtn()
        loginPage.login('username', 'password')
        navbar.navtabIsVisible()
    })

    it ('logout from the application', () => {
        App.logout()
        navbar.signinBtnIsVisible()
    })
})