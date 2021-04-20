import Base from '../Base'

class helpPage extends Base {
    get title() {
        return $('.span8 > h3')
    }

    get transferFunds() {
        return $('*=transfer funds?')
    }

    get payBilss() {
        return $('*=How do I pay')
    }

    clickTransferFunds() {
        this.transferFunds.waitForExist()
        this.transferFunds.click()
    }

    clickPayBills() {
        this.payBilss.waitForExist()
        this.payBilss.click()
    }
}

export default new helpPage()