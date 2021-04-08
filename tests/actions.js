import { check } from 'prettier'
import {short, medium, long} from '../lib/timeouts'

describe('Browser Actions', () => {
    it ('Inputs', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Example')
        browser.pause(short)
        input.clearValue()
        input.setValue('Example1')
        browser.pause(short)
    })

    it('click', () => {
        const btnPopulate = $('#populate')
        btnPopulate.waitForExist()
        btnPopulate.click()
    })

    it ('checkbox & radiobutton', () => {
        const radioBtn = $('#macos')
        radioBtn.waitForExist()
        radioBtn.click()
        const checkbox = $('#background-parallel-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(3000)
    })
    
    it ('select box', () => {
        const selectBox = $('#preferred-interface')
        selectBox.waitForExist()
        selectBox.selectByVisibleText('JavaScript API')
        browser.pause(short)
    })
})