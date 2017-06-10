'use strict';

var UpdateItemPage = function() {
    this.header                     = element(by.id('main')).element(by.css('h1'));

    this.inputComputerName          = element(by.id('name'));
    this.inputComputerClearfix      = element(by.css('.clearfix.error'));
    this.inputIntroducedDate        = element(by.id('introduced'));
    this.inputDiscontinuedDate      = element(by.id('discontinued'));

    this.listChooseACompany         = element(by.id('company'));

    this.buttonSaveThisComputer     = element(by.css('.btn.primary'));
    this.buttonCancel               = element.all(by.css('.btn')).last();
    this.buttonDeleteThisComputer   = element.all(by.css('.btn.danger')).last();
};

module.exports = UpdateItemPage;