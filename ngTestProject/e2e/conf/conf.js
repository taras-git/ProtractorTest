var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'firefox'
    },

    params: {
        item: {
            name1: 'NewAngularComputer',
            name2: 'BrandNewSuperComputer',
            name3: 'UPDATED'
        },
        wait: {
            fiveSec: 5000
        }
    },

    suites: {
        home:       '../pages/home/*spec.js',
        add:        '../pages/add*/*spec.js',
        update:     '../pages/update*/*spec.js',
        delete:     '../pages/delete*/*spec.js'
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};