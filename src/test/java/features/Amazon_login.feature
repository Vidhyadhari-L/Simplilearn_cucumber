Feature: Login into amazon website


  Scenario: Positive scenario to test login functionality
    Given User has opened amazon website on chrome browser
    #additional steps/conditions usng And But
    #And user is admin user
    #But User has logged in from India
    When User enters correct username and password
    Then User should be able to login successfully

  Scenario: Negative scenario to test login functionality
    Given User has opened amazon website on chrome browser
    When User enters incorrect username and password
    Then User should  not be able to login successfully
