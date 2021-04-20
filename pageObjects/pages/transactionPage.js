import Base from '../Base'

class transactionPage extends Base {
    get description() {
        return $('#aa_description')
    }

    get type(){
        return $('#aa_type')
    }

    get submitBtn(){
        return $('button[type="submit"]')
    }

    get errorMsg(){
        return $('#filtered_transactions_for_account')
    }

    setDescription(desc){
        this.description.waitForExist()
        this.description.setValue(desc)
    }

    clickSubmitBtn(){
        this.submitBtn.click()
    }
}

export default new transactionPage()