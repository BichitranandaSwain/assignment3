
module.exports = {
    'Login Page Initial Render':''+function(browser) {
      var login = browser.page.Login_Object();
  
      login.navigate()
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('@username')
      .verify.visible('@password')
      .verify.value( '@submit', 'Login' )
      .verify.elementNotPresent('@error')

    browser.end();
    }
}
  
  