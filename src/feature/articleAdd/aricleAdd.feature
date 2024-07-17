Feature: Add an item to the cart
  Scenario Outline: Add an item to the cart
    Given I am logged in to Saucedemo
    When  I add an item "<itemName>" to the cart
    Then  I should see the item "<itemName>" in the cart

    Examples:
      | itemName                |
      | Sauce Labs Backpack     |
      | Sauce Labs Bike Light   |
      | Sauce Labs Bolt T-Shirt |
