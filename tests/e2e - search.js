import navbar from "../pageObjects/componants/navbar"
import App from '../pageObjects/App'

describe ('E2E tests - search', () =>{
    it ('shd load homepage', () => {
        App.openHomepage()
    })

    it ('shd submit the searchbox', () => {
       navbar.clickSearchBox('bank')  
    })

})
    