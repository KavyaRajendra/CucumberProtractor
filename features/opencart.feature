Feature: Test Opencart page
  Launch Opencart page and perform verifications


  Scenario: sample test for Opencart with before and after scenario
    Given Opencart Url is been open
    Then I should see "OpenCart - Open Source Shopping Cart Solution" as page title
    When I Click on login
    And Enter "username" and "password"
    When I click on the Login Button
    Then I should see error message