describe('e2e - help section', () => {
    it ('login to the application', () => {
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

    it ('shd load the help content', () => {
        $('.icon-cog').waitForExist()
        $('.icon-cog').click()
        $('#help_link').click()
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')
        $('*=transfer funds?').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=How do I pay').click()
        expect(title).toHaveText('How do I pay bills?')
    })
})