describe ('E2E tests - search', () =>{
    it ('shd load homepage', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#searchTerm').waitForExist()
    })

    it ('shd submit the searchbox', () => {
        $('#searchTerm').setValue('bank')
        browser.keys('Enter')
    })

})
    