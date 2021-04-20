import {short, medium, long} from '../lib/timeouts'
import App from '../pageObjects/App'
import loginPage from '../pageObjects/pages/loginPage'
import navbar from '../pageObjects/componants/navbar'
import feedbackPage from '../pageObjects/pages/feedbackPage'

describe ('feedback form', () => {
    it ('Shd load the feedback form', () => {
        App.openFeedbackPage()
        feedbackPage.feedbackTitleIsVisible()
    })

    it ('Shd submit the feedback form', () => {
        feedbackPage.fillform('kirti', 'kirti@test', 'subject', 'comment')
        feedbackPage.clickSubmitBtn()
        feedbackPage.feedbackTitleIsVisible()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})