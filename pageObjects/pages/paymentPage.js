import Base from '../Base'

class paymentPage extends Base {
    get payee(){
        return $('#sp_payee')
    }

    get account(){
        return $('#sp_account')
    }

    get amount(){
        return $('#sp_amount')
    }

    get date(){
        return $('#sp_date')
    }

    get description(){
        return  $('#sp_description')
    }

    get savedPayees() {
        return $('#pay_saved_payees')
    }

    get successMsg(){
        return $('#alert_content')
    }

    setAmount(amt){
        this.amount.waitForExist()
        this.amount.setValue(amt)
    }

    setDate(date){
        this.date.setValue(date)
    }

    setDesciption(desc){
        this.description.setValue(desc)
    }

    clickSavedPayees(){
        this.savedPayees.click()
    }
}

export default new paymentPage()