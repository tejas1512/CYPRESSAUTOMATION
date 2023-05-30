describe('MyTestSuite', () => 
{

    it('Verify Title of the page', () => 
    {

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')

    })

    
    /*it('Verify Title of the Page-Negative', () => 
    {

        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce  store')

    })*/

  })