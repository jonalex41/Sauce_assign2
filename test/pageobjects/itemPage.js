import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'


/**
 * sub page containing specific selectors and methods for a specific page
 */
class itemPage {
    /**
     * define selectors using getter methods
     */
    selector = ''
    get itemButton () { return $(this.selector); }
    get shopCart () { return $('a.') }
    // get cartCount () { return $('span.shopping_cart_badge') }
/**
 * add an item to the cart based on the selector for the button.
 * added the initial part of the selector.
 */
    async addItem (cssSelector, items) {
        this.selector = 'button#add-to-cart-sauce-labs-' + cssSelector;
        await browser.pause(300)
        await this.itemButton.click()
        await browser.pause(300)
        await expect($('//span[@class="shopping_cart_badge"]')).toHaveText(items)
    }
/**
 * removes an item based on the Id name of the button
 * added the initial part of the selector.
 */
    async removeItem (cssSelector, items) {
        this.selector = 'button#remove-sauce-labs-' + cssSelector;
        await browser.pause(300)
        await this.itemButton.click()
        await browser.pause(300)
        await expect($('//span[@class="shopping_cart_badge"]')).toHaveText(items)
    }

    async addRemoveItems() {
        await this.addItem('backpack', '1')
        await this.addItem('bike-light', '2')
        await this.removeItem('backpack', '1')
    }

    // async shoppingCart () {
    // browser.pause()
    // }

}

export default new itemPage();
