'use strict';

var AddItemPage = require('./addItem.po.js');
var addItemPage = new AddItemPage()

var HomePage = require('../home/home.po.js');
var homePage = new HomePage()

var EC = protractor.ExpectedConditions;
var params = browser.params;

describe('Add a new computer page', function () {

    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });

    it('should be correctly displayed', function () {
        addItemPage.get();

        expect(addItemPage.header.getText()).toBe('Add a computer');
        expect(addItemPage.buttonCreateThisComputer.isDisplayed()).toBeTruthy();
        expect(addItemPage.buttonCancel.isDisplayed()).toBeTruthy();
        expect(addItemPage.inputComputerName.isDisplayed()).toBeTruthy();
        expect(addItemPage.inputDiscontinuedDate.isDisplayed()).toBeTruthy();
        expect(addItemPage.inputIntroducedDate.isDisplayed()).toBeTruthy();
        expect(addItemPage.listChooseACompany.isDisplayed()).toBeTruthy();
    });

    it('should go back if button cancel pressed', function () {
        addItemPage.get();
        addItemPage.buttonCancel.click();

        browser.wait(EC.visibilityOf(homePage.buttonFilterByName), params.wait.fiveSec).then(function () {
            expect(homePage.header.getText()).toContain(' computers found');
        });
    });

    it('should add a computer using its name only', function () {
        var computerName1 = params.item.name1;

        addItemPage.get();
        addItemPage.inputComputerName.sendKeys(computerName1);
        addItemPage.buttonCreateThisComputer.click();

        browser.wait(EC.visibilityOf(homePage.messageAlertWarning), params.wait.fiveSec).then(function () {
            expect(homePage.messageAlertWarning.getText()).toBe('Done! Computer ' + computerName1 + ' has been created');
        });
    });

    it('should add a computer with all data', function () {
        var computerName2 = params.item.name2;

        addItemPage.get();
        addItemPage.inputComputerName.sendKeys(computerName2);
        addItemPage.inputIntroducedDate.sendKeys('2017-06-06');
        addItemPage.inputDiscontinuedDate.sendKeys('2027-06-06');
        addItemPage.listChooseACompany.$('[value="5"]').click();
        addItemPage.buttonCreateThisComputer.click();

        browser.wait(EC.visibilityOf(homePage.messageAlertWarning), params.wait.fiveSec).then(function () {
            expect(homePage.messageAlertWarning.getText()).toBe('Done! Computer ' + computerName2 + ' has been created');
        });
    });

    it('should show an error message when no name provided', function () {
        addItemPage.get();
        addItemPage.buttonCreateThisComputer.click();

        browser.wait(EC.visibilityOf(addItemPage.inputComputerClearfix), params.wait.fiveSec).then(function () {
            expect(addItemPage.inputComputerClearfix.getText()).toBe('Computer name\nRequired');
        });
    });
});