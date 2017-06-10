'use strict';

var AddItemPage = function () {
    this.get = function () {
        browser.driver.get('http://computer-database.herokuapp.com/computers/new');
    };

    this.header                 = element(by.id('main')).element(by.css('h1'));

    this.inputComputerName      = element(by.id('name'));
    this.inputIntroducedDate    = element(by.id('introduced'));
    this.inputDiscontinuedDate  = element(by.id('discontinued'));
    this.inputComputerClearfix  = element(by.css('.clearfix.error'));

    this.listChooseACompany     = element(by.id('company'));

    this.buttonCreateThisComputer = element(by.css('.primary'));
    this.buttonCancel           = element.all(by.css('.btn')).last();
};

module.exports = AddItemPage;