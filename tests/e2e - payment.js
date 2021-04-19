describe('e2e payment', () => {
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

    it ('make payment', () => {
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        const payee = $('#sp_payee')
        payee.selectByAttribute('value', 'sprint')
        const account = $('#sp_account')
        account.selectByVisibleText('Savings')
        $('#sp_amount').setValue('500')
        $('#sp_date').setValue('2021-04-06')
        $('#sp_description').setValue('test')
        $('#pay_saved_payees').click()
        const successMsg = $('#alert_content')
        expect(successMsg).toHaveText('The payment was successfully submitted.')
    })
})