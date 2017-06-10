'use strict';

var Homepage = function() {
    this.get = function() {
        browser.driver.get('http://computer-database.herokuapp.com/computers');
    };

    this.header                 = element(by.id('main')).element(by.css('h1'));

    this.inputSearchField       = element(by.id('searchbox'));

    this.buttonAddNewComputer   = element(by.id('add'));
    this.buttonFilterByName     = element(by.id('searchsubmit'));

    this.messageAlertWarning    = element(by.css('.alert-message'));

};

module.exports = Homepage;