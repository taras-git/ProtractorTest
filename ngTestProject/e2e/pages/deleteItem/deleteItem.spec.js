'use strict';

var HomePage = require('../home/home.po.js');
var homePage = new HomePage()

var UpdateItemPage = require('../updateItem/updateItem.po.js');
var updateItemPage = new UpdateItemPage()

var EC = protractor.ExpectedConditions;
var params = browser.params;


describe('Delete a computer page', function() {
    beforeEach(function() {
        return browser.ignoreSynchronization = true;
    });

    it('should go to home page after deleting a computer', function() {
        var computerName1 = params.item.name1;

        homePage.get();
        homePage.inputSearchField.sendKeys(computerName1);
        homePage.buttonFilterByName.click();
        browser.wait(EC.visibilityOf(element(by.linkText(computerName1))), params.wait.fiveSec).then(function () {
            element(by.linkText(computerName1)).click();
        });
        browser.wait(EC.visibilityOf(updateItemPage.buttonDeleteThisComputer), params.wait.fiveSec).then(function () {
            updateItemPage.buttonDeleteThisComputer.click();
        });

        browser.wait(EC.visibilityOf(homePage.messageAlertWarning), params.wait.fiveSec).then(function () {
            expect(homePage.messageAlertWarning.getText()).toBe('Done! Computer has been deleted');
        });
    });
});