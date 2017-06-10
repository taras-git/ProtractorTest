'use strict';

var HomePage = require('../home/home.po.js');
var homePage = new HomePage()

var UpdateItemPage = require('../updateItem/updateItem.po.js');
var updateItemPage = new UpdateItemPage()

var EC = protractor.ExpectedConditions;
var params = browser.params;


describe('Edit computer page', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });

    var computerName1 = params.item.name1;

    it('should display a computer', function () {
        homePage.get();
        browser.wait(EC.visibilityOf(homePage.inputSearchField), params.wait.fiveSec);
        homePage.inputSearchField.sendKeys(computerName1);
        homePage.buttonFilterByName.click();
        browser.wait(EC.visibilityOf(element(by.linkText(computerName1))), params.wait.fiveSec);
        element(by.linkText(computerName1)).click();

        browser.wait(EC.visibilityOf(updateItemPage.buttonDeleteThisComputer), params.wait.fiveSec).then(function () {
            expect(updateItemPage.header.getText()).toBe('Edit computer');
        });
    });

    it('should go back to Home page if press button Cancel during updating', function () {
        homePage.get();
        homePage.inputSearchField.sendKeys(computerName1);
        homePage.buttonFilterByName.click();
        browser.wait(EC.visibilityOf(element(by.linkText(computerName1))), params.wait.fiveSec);
        element(by.linkText(computerName1)).click();
        updateItemPage.buttonCancel.click();

        expect(homePage.header.getText()).toContain(' computers found');
    });

    it('should update a computer name', function () {
        homePage.get();
        homePage.inputSearchField.sendKeys(computerName1);
        homePage.buttonFilterByName.click();
        browser.wait(EC.visibilityOf(element(by.linkText(computerName1))), params.wait.fiveSec);
        element(by.linkText(computerName1)).click();
        browser.wait(EC.visibilityOf(updateItemPage.buttonDeleteThisComputer), params.wait.fiveSec);

        var updName = params.item.name3;

        updateItemPage.inputComputerName.sendKeys(updName);
        updateItemPage.buttonSaveThisComputer.click();

        browser.wait(EC.visibilityOf(homePage.messageAlertWarning), params.wait.fiveSec).then(function () {
            expect(homePage.messageAlertWarning.getText()).toBe('Done! Computer ' + computerName1 + updName + ' has been updated');
        });
    });
});