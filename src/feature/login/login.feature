Feature: internet website to practice
  Scenario Outline: As a user, I can log into the Swag Labs

    Given I am on the login page
    When I login with <username> and <password>
    

    Examples:
      | username      | password             |                        
      | standard_user | secret_sauce         | 
      | problem_user  | 123456               | 

 
