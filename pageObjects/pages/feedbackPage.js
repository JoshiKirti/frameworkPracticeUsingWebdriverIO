import Base from '../Base'

class feedbackPage extends Base {

    get title() {
        return $('#feedback-title')
    }

    get name(){
        return $('#name')
    }

    get email() {
        return $('#email')
    }

    get subject(){
        return $('#subject')
    }

    get comment() {
        return $('#comment')
    }

    get submitBtn() {
        return $('input[type="submit"]')
    }

    feedbackTitleIsVisible(){
        this.title.waitForExist()
    }

    fillform(name, email, subject, comment) {
        this.name.setValue(name)
        this.email.setValue(email)
        this.subject.setValue(subject)
        this.comment.setValue(comment)
        }

    clickSubmitBtn() {
        this.submitBtn.click()
    }
}

export default new feedbackPage()