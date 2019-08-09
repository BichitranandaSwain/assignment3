
module.exports = {

  before:function(){
    console.log("Starting Suite");
  },
  beforeEach:function(){
    console.log("Starting of the function")

  },
    'Login Page_Object_Sections Test': function(browser) {
      var login = browser.page.Login_Object_Section();
  
      login.navigate();
      login.expect.section('@logininput').to.be.visible;
      var logininputSection = login.section.logininput;
      logininputSection.expect.element('@username').to.be.visible;
      logininputSection.setValue('Input[name=user_name]',"",function(){
        logininputSection.setValue('Input[name=user_name]','Hi')

      })
      
      logininputSection.getValue('Input[name=user_name]', function(result){
        console.log('---->'+result.value)
        logininputSection.assert.value('Input[name=user_name]','Hi')
      })

      logininputSection.expect.element('@password').to.be.visible;
      logininputSection.pause(1000);
      
    browser.end();
    },
    

after:function(){
  console.log("Ending of Suite");
}
}

  
  