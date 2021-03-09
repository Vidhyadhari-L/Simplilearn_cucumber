$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/LoginWithPram.feature");
formatter.feature({
  "name": "Login into simplilearn website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive scenario to test login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened amazon website on Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters correct \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "def@xyz.com",
        "abc1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive scenario to test login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened amazon website on Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_StepDef.user_has_opened_amazon_website_on_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters correct \"def@xyz.com\" and \"abc1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login_StepDef.user_enters_correct_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDef.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});