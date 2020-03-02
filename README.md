# LiveTraffic-Test Automation
Master branch contains End to End Live traffic e2e test scenarios and automation scripts 

# Pre-requisite

1.	Install NPM (Node.js) - this is required to install protractor
2.  Install protractor globally,  this can be done by running the command `npm install –g protractor` in the command prompt.
2.	Update Web driver manager. This can be done by running the command `webdriver-manage update` in the command prompt.

# Setup

1.	Clone the repo.
2.	Install dependencies by running the command `npm install` in command prompt.

# Running tests
1.	To run test in local `npm run livetraffic-test`
2.	To run test in BrowserStack `npm run browserstack-test`

# Report
You can view your 
*    `local test` results in `./target/site/serenity/Index.html`
*    `BrowserStack test` results in [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
