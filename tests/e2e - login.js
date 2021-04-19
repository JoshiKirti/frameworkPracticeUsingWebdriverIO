import {short, medium, long} from '../lib/timeouts'
import loginPage from '../pageObjects/pages/loginPage'

describe('Login and Logout Journey', () => {
    // it ('Login with invalid credentials', ()=> {
    //     browser.url('https://www.w3schools.com/')
    //     const acceptBtn = $('#accept-choices')
    //     acceptBtn.waitForExist()
    //     acceptBtn.click()
    //     const loginBtn = $('#w3loginbtn')
    //     loginBtn.waitForExist()
    //     loginBtn.click()
    //     const username = $('#modalusername')
    //     username.waitForExist()
    //     username.setValue('username')
    //     const password = $('#current-password')
    //     password.setValue('password')
    //     const submit = $('._1VfsI')
    //     submit.click()
    //     const error = $('._2rXkA')
    //     expect(error).toHaveText('Looks like you forgot something')
    // })

    // it('login with valid credentials', () => {
    //     browser.url('https://www.w3schools.com/')
    //     // const acceptBtn = $('#accept-choices')
    //     // acceptBtn.waitForExist()
    //     // acceptBtn.click()
    //     const loginBtn = $('#w3loginbtn')
    //     loginBtn.waitForExist()
    //     loginBtn.click()
    //     const username = $('#modalusername')
    //     username.waitForExist()
    //     username.setValue('kirtijoshi52@gmail.com')
    //     const password = $('#current-password')
    //     password.setValue('@Bhaskar55')
    //     const submit = $('._1VfsI')
    //     submit.click()
    //     const navbar = $('#navigation')
    //     navbar.waitForExist()
    // })

    // it ('logout', () => {
    //     const logoutBtn = $('._W0vjl')
    //     logoutBtn.click()
    //     const loginCheck = $('h1')
    //     // ._2j6WO 
    //     loginCheck.waitForExist()
    // })


    it ('login using invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        // const signin = $('#signin_button')
        // signin.waitForExist()
        // signin.click()
        // const username = $('#user_login')
        // username.waitForExist()
        // username.setValue('invalid')
        // const password = $('#user_password')
        // password.setValue('invalid')
        // const submit = $('input[type="submit"]')
        // submit.click()
        // const errorMsg = $('.alert-error')
        // expect(errorMsg).toHaveText('Login and/or password are wrong.')

        loginPage.clickOnSigninBtn()
        loginPage.fillForm()
        loginPage.submitBtn()
        loginPage.errorMsgValidation()
    })

    it ('login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        const signin = $('#signin_button')
        signin.waitForExist()
        signin.click()
        const username = $('#user_login')
        username.waitForExist()
        username.setValue('username')
        const password = $('#user_password')
        password.setValue('password')
        const submit = $('input[type="submit"]')
        submit.click()
        $('.nav-tabs').waitForExist()
    })

    it ('logout from the application', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').click()
        $('#nav').waitForExist()
    })
})