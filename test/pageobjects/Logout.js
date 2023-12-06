import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for the checkout page
 */
class logout {
    /**
     * define selectors using getter methods
     */
    get hamburger () { return $('button#react-burger-menu-btn') }
    get logoutBtn () { return $('a#logout_sidebar_link'); }
    get error () { return $('//h3[@data-test="error"]') }

    // 
    async out () {
        await expect(this.hamburger).toBeClickable()
        await this.hamburger.click()
        await browser.pause(500)
        await expect(this.logoutBtn).toBeClickable()
        await this.logoutBtn.click()
        await browser.pause(500)
    }

    async backIn () {
        await browser.url('https://www.saucedemo.com/inventory.html')
        await browser.pause(500)
        await expect(this.error).toHaveTextContaining('Epic sadface: You can only access \'/inventory.html\' when you are logged in.')
    }

}

export default new logout();
