import Base from '../Base'

class insideNavbar extends Base {
    get accountActivityTab() {
        return  $('#account_activity_tab')
    }

    get transactionsTab() {
        return $('/html/body/div[1]/div[2]/div/div[2]/div/div/div/ul/li[2]/a')
    }

    get payBills(){
        return $('#pay_bills_tab')
    }

    get exchnage(){
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get currency(){
        return $('#pc_currency')
    }

    clickPayBills(){
        this.payBills.waitForExist()
        this.payBills.click()
    }

    clickExchange(){
        this.exchnage.click()
    }

    clickAccountActivityTab() {
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }

    clickTransactionsTab() {
        this.transactionsTab.waitForExist()
        this.transactionsTab.click()
    }
}

export default new insideNavbar()