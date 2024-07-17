Feature: internet website to practice
  Scenario Outline: As a user, I can log into the Swag Labs

    Given user is at the login page
    When user enters username as <username> and password as <password>
    And user clicks on login button
    Then should see the products page

    Examples:
      | username      | password             |                        
      | standard_user | secret_sauce         | 
    


  Scenario Outline: Check the login is not possible whe user enters invalid credentials

    Given user is at thr login page
    When user enters username as <username_problem> and password as <password_problem>
    And user clicks on login button
    Then User should NOT be able to login to the website
    And should display an error messages 

    Examples:
      | username_problem    | password_problem            |                        
      | problem_user        | 123456                      | 

 