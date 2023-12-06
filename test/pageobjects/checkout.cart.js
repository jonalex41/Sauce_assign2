import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for the checkout page
 */
class checkOutPg {
    /**
     * define selectors using getter methods
     */
    get shpBtn () { return $('a.shopping_cart_link'); }
    get contBtn () { return $('#checkout') }
    get cartList () { return $('div.cart_list'); }

    // get cartCount () { return $('span.shopping_cart_badge') }

    async cartHasItems (numItems) {
        browser.pause(500)
        expect(this.cartList).toHaveChildren(numItems + 2)
    }
/**
 * navigates throught the initial checkout screens
 */
    async checkout () {
        browser.pause(500)
        expect(this.shpBtn).toBeClickable()
        this.shpBtn.click()
        browser.pause(500)
        expect(this.contBtn).toBeClickable()
        this.contBtn.click()
        browser.pause(500)
    }

}

export default new checkOutPg();
