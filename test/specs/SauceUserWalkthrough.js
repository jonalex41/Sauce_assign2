// import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import itemPage from '../pageobjects/itemPage.js'
import checkOutPg from '../pageobjects/checkout.cart.js'
import checkoutInfo from '../pageobjects/checkout.info.js'
import logout from '../pageobjects/Logout.js'

// import { browser } from '@wdio/globals'

describe('Walkthrough, login, add items, checkout, and logout', () => {
    it('walkthrough a single user experience', async () => {
        await loginPage.goodUser('standard_user', 'secret_sauce')
        await itemPage.addItem('backpack', '1')
        await itemPage.addItem('bike-light', '2')
        await itemPage.removeItem('backpack', '1')
        await checkOutPg.cartHasItems(1)
        await checkOutPg.checkout()
        await checkoutInfo.fillInfoCont('Theadore', 'Rosevelt', '84068')
        await logout.out()
        await logout.backIn()
    })
})