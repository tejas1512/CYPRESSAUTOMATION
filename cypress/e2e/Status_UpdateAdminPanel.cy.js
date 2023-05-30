describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test1.creditfair.in/admin/login')
    cy.get('input[name="username"]').type('tejas')
    cy.get('input[name="password"]').type('1234')
    cy.get("#m_login_signin_submit").click()
    cy.get('#m_ver_menu > ul > li:nth-child(4) > a > span > span > span').click()
    cy.get('#m_ver_menu > ul > li:nth-child(4) > ul > li:nth-child(2) > a:nth-child(2)').click()
    cy.get('span.dropdown list-icon').click()
  })
})