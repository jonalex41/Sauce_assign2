import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkoutInfo {
    /**
     * define selectors using getter methods
     */
    get first () { return $('input#first-name'); }
    get last () { return $('input#last-name') }
    get post () { return $('input#postal-code') }
    get conBtn () { return $('input#continue') }

    get errorBox () { return $('//h3[@data-test="error"]') }
    get cartList () { return $('div.summary_total_label') }
    get finish () { return $('button#finish') }
    get thnkMsg () { return $('//div[@id="checkout_complete_container"]/h2') }
    // get cartCount () { return $('span.shopping_cart_badge') }

    async fillInfoCont (first, last, zip) {
        await browser.pause(400)
        await this.first.setValue(first)
        await this.contBtn()
        await browser.pause(400)
        await this.last.setValue(last)
        await this.contBtn()
        await browser.pause(400)
        await this.post.setValue(zip)
        await browser.pause(400)
        await this.conBtn.click()
        await browser.pause(500)
        await expect(this.cartList).toExist()
        await this.clkFinish()
        await browser.pause(500)
        await expect(this.thnkMsg).toHaveTextContaining('Thank you for your order!')
    }

    async contBtn () {
        await browser.pause(400) 
        await this.conBtn.click()
        await expect(this.errorBox).toHaveTextContaining('Error:')     
    }

    async clkFinish() {
        await expect(this.finish).toBeClickable()
        await browser.pause(500)
        await this.finish.click()
    }

}


export default new checkoutInfo();
