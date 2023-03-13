$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Homework.feature");
formatter.feature({
  "name": "Techfios Other billing login page functionality validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "User enters the \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the \"\u003cpassword\u003e\" in the password field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountTitle\u003e\" in the accountTitle field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the description field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cPhone\u003e\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the internetBankingURL field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
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
        "password",
        "accountTitle",
        "description",
        "intialBalance",
        "accountNumber",
        "contactPerson",
        "Phone"
      ]
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Checking",
        "Techfios",
        "1245.00",
        "01234",
        "James Bond",
        "4728798745"
      ]
    }
  ]
});
formatter.background({
  "name": "Given User is on the techfios login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "name": "User enters the \"demo@techfios.com\" in the username field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the \"abc123\" in the password field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_land_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_bankcash()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_newAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Checking\" in the accountTitle field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_accountTitle_in_the_accountTitle_field(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"account\"]\"}\n  (Session info: chrome\u003d111.0.5563.64)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027ADMINRG-C5P4Q8Q\u0027, ip: \u0027192.168.254.128\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.4.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.64, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\OFFICE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53514}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 226e4641e861f7ac6aae9d679419bf18\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"account\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.sendKeys(Unknown Source)\r\n\tat pages.LoginPage.enterAccountTitle(LoginPage.java:88)\r\n\tat steps.LoginStepDefinition.user_enter_accountTitle_in_the_accountTitle_field(LoginStepDefinition.java:64)\r\n\tat ✽.User enters \"Checking\" in the accountTitle field in accounts page(file:///C:/Users/OfficeComRyzen/Sept2023_Selenium/Cucumber/src/test/resources/features/Homework.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"Techfios\" in the description field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_description_in_the_description_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the initialBalance field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enter_initialBalance(float)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"01234\" in the accountNumber field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_accoutnumber(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"James Bond\" in the contactPerson field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_contactperson(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"4728798745\" in the Phone field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_phonenumber(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the internetBankingURL field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_enters_internet_banking_url(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginStepDefinition.user_should_be_able_to_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});