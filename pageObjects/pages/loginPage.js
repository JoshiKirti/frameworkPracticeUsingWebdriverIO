import Base from '../Base'


class loginPage extends Base {

    get usernameInput() {
        return $('#user_login')
    }

    get passwordInput() {
        return $('#user_password')
    }

    get submitBtn() {
        return $('input[type="submit"]')
    }

    get error() {
        return $('.alert-error')
    }


    fillForm(username, password) {
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    login(username, password) {
        this.usernameInput.waitForExist()
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.submitBtn.click()
    }

    ClickOnsubmitBtn() {
        this.submitBtn.waitForExist()
        this.submitBtn.click()
    }


}

export default new loginPage()