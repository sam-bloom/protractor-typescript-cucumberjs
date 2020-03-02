import chai = require('chai');
import chaiAsPromised = require("chai-as-promised");
import { StepDefinitions, TableDefinition } from 'cucumber';

import { LTHomePage } from "../pages/LT_home.po";
import { LTSideMenuBar } from "../pages/LT_sidemenubar.po";


chai.use(chaiAsPromised as any);
const expect = chai.expect;

export = function (this: StepDefinitions) {


     const LTHomepage: LTHomePage = new LTHomePage();
     const LTSidemenuBar: LTSideMenuBar = new LTSideMenuBar();

     this.Given(/^.*?I am at the LiveTraffic Website$/, async () => {

          console.log("I am at the LiveTraffic Website");
          await LTHomepage.open();
     });

     this.Then(/^.*?I should see the LiveTraffic Website Home page$/, async () => {
          console.log("I should see the LiveTraffic Website Home page")
          await LTHomepage.clickLiveTrafficTMenu();
     });

     this.When(/^.*?I navigate to LiveTraffic Twitter account from "([^"]*)" link on the side menu$/, async (socialmedialinkName: string) => {

          await LTSidemenuBar.clickSocialMediaLink(socialmedialinkName);
          console.log("I navigate to LiveTraffic Twitter account from -" + socialmedialinkName + "- link on the side menu")
     });

     this.Then(/^.*?I should see the LiveTraffic Twitter page for "([^"]*)" link$/, async (socialmedialink: string) => {

          await LTSidemenuBar.validateSocialMediaHomePage(socialmedialink);
          console.log("I should see the LiveTraffic Twitter page for  -" + socialmedialink + "-  link")
     });

     this.Then(/^.*?I close LiveTraffic "([^"]*)" page$/, async (mediapage: string) => {
          await LTSidemenuBar.closeChildWindow();
     })

     this.When(/^.*?I navigate to LiveTraffic FaceBook account from "([^"]*)" link on the side menu$/, async (socialmedialink: string) => {

          await LTSidemenuBar.clickSocialMediaLink(socialmedialink);
          console.log("I navigate to LiveTraffic FaceBook account from-" + socialmedialink + "-link on the side menu")
     });

     this.Then(/^.*?I should see the LiveTraffic FaceBook page for "([^"]*)" link$/, async (socialmedialink: string) => {

          await LTSidemenuBar.validateSocialMediaHomePage(socialmedialink);
          console.log("I should see the LiveTraffic FaceBook page for -" + socialmedialink + "- link")
     })

     this.When(/^.*?I click on Transport for NSW logo button from Live Traffic side menu bar$/, async () => {

          await LTSidemenuBar.clickSocialMediaLink("TfNSW");
     });

     this.Then(/^.*?I should see the Transport NSW site launched in the new tab$/, async () => {
          
          await LTSidemenuBar.validateSocialMediaHomePage("TfNSW");
     });

     

};