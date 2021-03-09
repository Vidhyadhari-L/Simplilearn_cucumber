Feature: Login into amazon website

  Background: Posititve scenario to test login functionality
    Given User has opened amazon website on chrome browser
    When User enters correct username and password
    Then User should be able to login successfully

  Scenario: To test all the products are display when we search laptop
    Given user is already on home page
    When user is trying to search laptops
    Then user should be displayed all the asvailable laptops
