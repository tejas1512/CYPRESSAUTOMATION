import 'cypress-wait-until';

/// <reference types="cypress" />

const { functions } = require("cypress/types/lodash")

describe('Locating Elements', function()
{
  it('Verify types of locators',function()
  {
    cy.visit("https://demo.nopcommerce.com/") //opens the url

    cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch")

    cy.get("[type='submit']").click()  //click on search button

    cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

    cy.get("#addtocart_4.EnteredQuantity").clear().type('2')  //Quantity

    cy.get("#add-to-cart-button-4").click()  //Add to cart button after providing quantity
   
    cy.wait(5000)
    cy.get("#topcartlink > a > span.cart-label").click()  //Shopping cart link
    cy.wait(3000)

    cy.get(".product-unit-price").contains('$1,800.00')  // Validating point
    cy.wait(3000)
  



  }

  )

}
)