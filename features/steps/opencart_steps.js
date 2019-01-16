var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var OpenCartSteps = function() {
    this.setDefaultTimeout(60 * 1000);
  var OpenCartPage = require("../pages/opencartPO.js");

  this.World = function MyWorld() {
    this.page = new OpenCartPage();
  };

  this.Given(/^Opencart Url is been open$/, function (callback) {
    this.page.get('https://opencart.com');
    callback();
  });

  this.Then(/^I should see "([^"]*)" as page title$/, function (title, callback) {
    expect(browser.getTitle()).to.eventually.equal(title).and.notify(callback);
  });

  this.When(/^I Click on login$/, function (callback) {
    this.page.link_Login().click();
    callback();
  });

  this.When(/^Enter "([^"]*)" and "([^"]*)"$/, function (username, password, callback) {
    this.page.textbar_Username().sendKeys(username)
    this.page.textbar_Password().sendKeys(password)
    callback();
  });

  this.When(/^I click on the Login Button$/, function (callback) {
    this.page.button_Login().click();
    callback();
  });

  this.Then(/^I should see error message$/, function (callback) {
    expect(this.page.text_ErrorMessage().getText()).to.eventually.equal("No match for E-Mail and/or Password.").and.notify(callback);
  });
};

module.exports = OpenCartSteps;