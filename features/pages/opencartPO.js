
var OpenCartPage = function() {
    browser.ignoreSynchronization=true;

    this.get = function(url) {
      browser.get(url);
    };
  
    this.link_Login = function(value) {
        return element(by.css('.btn.btn-link.navbar-btn'))
    };
    
    this.textbar_Username = function(value) {
    return element(by.id('input-email'))
    };

    this.textbar_Password = function(value) {
    return element(by.id("input-password"))
    };

    this.button_Login = function(value) {
    return element(by.xpath("//button[@class='btn btn-primary btn-lg hidden-xs']"))
    };

    this.text_ErrorMessage = function() {
    return element(by.css('.alert.alert-danger'))
    };
  };
  
  module.exports = OpenCartPage;
  