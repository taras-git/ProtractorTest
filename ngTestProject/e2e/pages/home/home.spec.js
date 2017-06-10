'use strict';

var AddItemPage = require('../addItem/addItem.po.js');
var addItemPage = new AddItemPage()

var homePage = require('./home.po.js');
var homePage = new homePage()

var params = browser.params;


describe('Heroku Computer webpage', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });

    it('should be correctly displayed', function () {
        homePage.get();

        expect(homePage.header.getText()).toContain(' computers found');
        expect(homePage.buttonFilterByName.getAttribute('value')).toBe('Filter by name');
        expect(homePage.inputSearchField.getAttribute('placeholder')).toBe('Filter by computer name...');
    });

    it('should go to Add a computer page after press button Add a computer', function () {
        homePage.get();
        homePage.buttonAddNewComputer.click();
        var EC = protractor.ExpectedConditions;
        var computerNameInput = addItemPage.inputComputerName;

        browser.wait(EC.visibilityOf(computerNameInput), params.wait.fiveSec).then(function () {
            expect(addItemPage.header.getText()).toBe('Add a computer');
            expect(addItemPage.buttonCreateThisComputer.isDisplayed()).toBeTruthy();
            expect(addItemPage.buttonCancel.isDisplayed()).toBeTruthy();
        });
    });

});