import Base from '../Base'

class exchangePage extends Base {
    get amount(){
        return  $('#pc_amount')
    }

    get dollars(){
        return $('#pc_inDollars_true')
    }

    get cash(){
        return $('#purchase_cash')
    }

    get successMsg(){
        return $('#alert_content')
    }

    setAmount(value){
        this.amount.waitForExist()
        this.amount.setValue(value)
    }

    clickDollars(){
        this.dollars.click()
    }

    clickCash(){
        this.cash.click()
    }
}

export default new exchangePage()