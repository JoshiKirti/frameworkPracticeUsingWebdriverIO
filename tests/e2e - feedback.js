import App from '../pageObjects/App'

describe ('feedback form', () => {
    it ('Shd load the feedback form', () => {
        //browser.url('http://zero.webappsecurity.com/index.html')
        App.openHomepage()
        $('#feedback').waitForExist()
        $('#feedback').click()
    })

    it ('Shd submit the feedback form', () => {
        $('#name').waitForExist()
        $('#name').setValue('Kirti')
        $('#email').setValue('kirti@login.com')
        $('#subject').setValue('subject')
        $('#comment').setValue('feedback form')
        $('input[type="submit"]').click()
        // $('#feedback-title').waitForExist()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})