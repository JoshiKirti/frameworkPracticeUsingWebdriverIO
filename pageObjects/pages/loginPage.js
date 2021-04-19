import Base from '../Base'

class loginPage extends Base {
    get signinBtn() {
        return $('#signin_button')
    }

    get usernameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitBtn() {
        return $('input[type="submit"]')
    }

    get errorMsg() {
        return $('.alert-error')
    }

    clickOnSigninBtn() {
        this.signinBtn.waitForExist()
        this.signinBtn.click()
    }

    fillForm(username, password) {
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitBtn() {
        this.submitBtn.waitForExist()
        this.submitBtn.click()
    }

    errorMsgValidation() {
        this.errorMsg.toHaveText('Login and/or password are wrong.')
    }


}

export default new loginPage()