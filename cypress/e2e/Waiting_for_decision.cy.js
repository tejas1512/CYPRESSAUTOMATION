describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test1.creditfair.in/admin/login')
    cy.get('input[name="username"]').type('tejas')
    cy.get('input[name="password"]').type('1234')
    cy.get("#m_login_signin_submit").click()
    cy.get('#m_ver_menu > ul > li:nth-child(4) > a > span > span > span').click()
    cy.get('#m_ver_menu > ul > li:nth-child(4) > ul > li:nth-child(2) > a:nth-child(2)').click()
    cy.xpath('//*[@id="tr_2397"]/td[10]/span[1]/i').should("be.visible");
    //cy.get('#tr_2397 > td:nth-child(11) > span.dropdown.list-icon.show > ul > li:nth-child(1) > a')
    cy.get('#tr_2397 > td:nth-child(11) > span:nth-child(2) > i')
    cy.get('#tr_2397 > td:nth-child(11) > span:nth-child(2)').click()
    cy.get('.dropdown.show > .dropdown-menu > [data-status="waiting for decision"] > a').click()
    cy.get('.table > tbody > :nth-child(1) > :nth-child(2) > a').click()
    cy.visit('https://test1.creditfair.in/admin/consumer-applications/edit/2397?docs=1&next-status=waiting%20for%20decision&href=nav-documents-tab&#nav-documents-tab')
    cy.get('.auto_generated_equifax_report > .bureau_reports > #bureau_reports')
    cy.xpath('//*[@id="bureau_reports"]/option[2]').should("be.visible");
    
    
   
    
  
  })
})