import {short, medium, long} from '../lib/timeouts'
import {mobile, tablet, desktop} from '../lib/devices'

describe ('first step with webdriverIO', () => {
    // it ('load example website', () => {
    //     browser.url('https://www.amazon.co.uk/')
    //     browser.pause(3000)
    //     expect(browser).toHaveUrl('https://www.amazon.co.uk/')
    //     expect(browser).toHaveTitle('Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')
    // })

    it ('launch w3 schools url', () => {
        browser.url('https://www.w3schools.com/')
        browser.pause(short)
        const acceptAllBtn = $('#accept-choices')
        acceptAllBtn.click()
        expect(browser).toHaveUrl('https://www.w3schools.com/')
        expect(browser).toHaveTitle('W3Schools Online Web Tutorials')
    })

    it ('h1 shd be visible', () => {
        const h1 = $('h1')
        h1.waitForExist()
        expect(h1).toBeVisible()
    })

    it ('check link value', () => {
        const link = $('a')
        link.waitForExist()
        expect(link).toHaveLink('https://www.w3schools.com/')
    } )

    it ('assert attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const submit = $('#submit-button')
        submit.waitForExist()
        expect(submit).toHaveAttrContaining('type', 'submit')
    })

    it ('assert Value', () => {
        const populateBtn = $('#populate')
        populateBtn.waitForExist()
        expect(populateBtn).toHaveValue('Populate')
    })

    it('save screenshot', () => {
        browser.saveScreenshot('exampleScreenshot.png')
    })

    it('change browser viewport', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })
})