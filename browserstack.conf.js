'use strict';
var allSpecs = 'features/**/*.feature';
require('ts-node/register');
var crew = require('serenity-js/lib/stage_crew');

exports.config = {

        baseUrl: "https://lt.qa.apps.green.dev.cds.transport.nsw.gov.au/",

        browserstackUser: 'samuelallimuthu1',
        browserstackKey: 'o19qiuwCUkAp2mfYdvfx',

        allScriptsTimeout: 600000,
        getPageTimeout: 50000,

        framework: 'custom',
        frameworkPath: require.resolve('serenity-js'),
        specs: [
            "./features/**/*.feature",
        ],

        cucumberOpts: {
            compiler: "ts:ts-node/register",
            format: "pretty",
            require: ["./src/stepDefinitions/*.ts", "./src/support/*.ts"],
        },
        
        commonCapabilities: {

            'build': 'protractor-browserstack',
            'name': 'singleTest1',
            'browserName': 'chrome',
            'resolution': '1024x768',
            'browserstack.debug': 'true'
        },

        // so that every tests starts with a system in a known state
        restartBrowserBetweenTests: false,

        onPrepare: async() => {
            await browser.waitForAngularEnabled(false);
            return browser.driver
                .manage()
                .window()
                .maximize()
                .catch(error => console.log(error));
        },
    
        serenity: {
            stageCueTimeout: 30 * 1000,
            crew: [crew.serenityBDDReporter(), crew.photographer()],
            dialect: "cucumber",
        }
        
    };
