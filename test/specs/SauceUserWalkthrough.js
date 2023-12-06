// import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import itemPage from '../pageobjects/itemPage.js'
import checkOutPg from '../pageobjects/checkout.cart.js'
import checkoutInfo from '../pageobjects/checkout.info.js'
import logout from '../pageobjects/Logout.js'

/**
 * User walkthrough test for logging in, adding and removing items from the cart,
 * checking out, and logging out.
 */

describe('Walkthrough, login, add items, checkout, and logout', () => {
    it('walkthrough a single user experience', async () => {
        await loginPage.goodUser('standard_user', 'secret_sauce')
        await itemPage.addRemoveItems()
        await checkOutPg.cartHasItems(1)
        await checkOutPg.checkout()
        await checkoutInfo.fillInfoCont('Theadore', 'Rosevelt', '84068')
        await logout.out()
        await logout.backIn()
    })
})