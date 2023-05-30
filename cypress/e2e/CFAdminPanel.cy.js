describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://test1.creditfair.in/admin/login')
    cy.get('input[name="username"]').type('tejas')
    cy.get('input[name="password"]').type('1234')
    cy.get("#m_login_signin_submit").click()
    cy.get("#m_ver_menu > ul > li:nth-child(4) > a > span > span > span").click()
    cy.get(3000)
    cy.get("#m_ver_menu > ul > li:nth-child(4) > ul > li:nth-child(2) > a:nth-child(2)").click()
    cy.get(3000)
    cy.get("body > div.m-grid.m-grid--hor.m-grid--root.m-page > div > div.m-grid__item.m-grid__item--fluid.m-wrapper > div.m-content > div > div.m-portlet__head > div:nth-child(2) > a > span").click()
    cy.get(3000)
    cy.get("#nav-personal-details > div:nth-child(2) > div:nth-child(1) > div.panel-heading > h4").click()
    cy.get(3000)
    cy.get("#exampleSelect1").select('ENGLISH')
    cy.get(3000)
    cy.get('#pan_no').type('HTYUP4040K')
    cy.get(3000)
    cy.get('#date_of_birth_datepicker').click()
    cy.get(3000)
    cy.get('[data-date="1115164800000"]').click()
    cy.get(3000)
    cy.get('input[name="first_name"]').type('credit')
    cy.get(3000)
    cy.get('input[name="middle_name"]').type('qa')
    cy.get(3000)
    cy.get('input[name="last_name"]').type('test')
    cy.get(3000)
    cy.get('input[name="father_name"]').type('test') 
    cy.get(3000)
    cy.get('#collapse1 > :nth-child(1) > :nth-child(9) > .col-lg-6 > .form-control').type('tejas.shetye@creditfair.in')
    cy.get(3000)
    cy.get(':nth-child(10) > .col-lg-4 > .form-control').type('9619169373')
    cy.get(3000)
    cy.get(':nth-child(13) > .col-lg-6 > #exampleSelect1').select('MALE')
    cy.get(3000)
    cy.get('#collapse1 > :nth-child(1) > :nth-child(14) > .col-lg-6 > .form-control').type('60000')
    cy.get(3000)
    cy.get('#collapse1 > :nth-child(1) > :nth-child(15) > .col-lg-6 > .form-control').type('50000')
    cy.get(3000)
    cy.get('#collapse1 > :nth-child(1) > :nth-child(17) > .col-lg-6 > .form-control').type('50000')
    cy.get(3000)
    cy.get(':nth-child(18) > .col-lg-6 > .btn-group > .btn > .filter-option').click()
    cy.get(3000)
    cy.get('#collapse1 > div > div:nth-child(18) > div > div > button > span.filter-option.pull-left')
    //cy.get('div.dropdown-menu.open').click({multiple: true,force: true}).get('select[name="merchant_id"]').select('1', {force: true})
    cy.get('div.dropdown-menu.open').click({multiple: true,force: true}).get('select[name="merchant_id"]').select('6987', {force: true})
    cy.get('select[name="purpose"]').select('4').should('have.value', '4')
    cy.get('input[name="duration_year"]').type('2')
    cy.get('input[name="product_name_str"]').type('CDAC')
    cy.get('select[name="offer_id"]').select('1018').should('have.value', '1018')
    cy.get('select[name="marital_status"]').select('SINGLE').should('have.value', 'SINGLE')
    cy.get('input[name="video_kyc"]').type('www.google.com')
    cy.get('#nav-personal-details > div:nth-child(2) > div:nth-child(2) > div.panel-heading > h4').click()
    cy.get('select[name="employee_status"]').select('SALARIED').should('have.value', 'SALARIED')
    cy.get('input[name="company_name_search"]').type('tester tejas qa').click()
    cy.get('input[name="company_number"]').type('0050505').click()
    cy.get('select[name="industry"]').select('0').should('have.value', '0')
    cy.get('select[name="profession"]').select('0').should('have.value', '0')
    cy.get('input[name="experience"]').type('42').click()
    //cy.get('input[name="work_address_pincode"]').type('400012').click()
    cy.get('#collapse4 > .panel-body > :nth-child(7) > .col-lg-6 > .form-control').type('400012')
    cy.get('input[name="designation"]').type('qa').click()
    cy.get('input[name="department"]').type('tech').click()
    cy.get('input[name="contact"]').type('7788990055').click()
    cy.get('input[name="linkedin"]').type('www.linkedin.com/tejas').click()
    cy.get('#nav-personal-details > div:nth-child(2) > div:nth-child(3) > div.panel-heading > h4').click()
    cy.get('input[name="permanent_address_line_1"]').type('tester tejas').click()
    cy.get('input[name="permanent_address_city"]').type('mumbai').click()
    cy.get('input[name="permanent_address_landmark"]').type('itc grand hotel').click()
    cy.get('input[name="permanent_address_pincode"]').type('400012').click()
    cy.get('select[name="permanent_address_status"]').select('RENTED').should('have.value', 'RENTED')
    cy.get('#checkboxAddress').check()
    //cy.get('button[type="submit"]').click()
    cy.get('body > div.m-grid.m-grid--hor.m-grid--root.m-page > div.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body > div.m-grid__item.m-grid__item--fluid.m-wrapper > div.m-content > div.m-portlet__foot.m-portlet__foot--fit > div > button.submit_app.btn.btn-primary').click()
    cy.get('#collapse1 > div > div:nth-child(15) > div > input').type('50000')
    cy.get('body > div.m-grid.m-grid--hor.m-grid--root.m-page > div.m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body > div.m-grid__item.m-grid__item--fluid.m-wrapper > div.m-content > div.m-portlet__foot.m-portlet__foot--fit > div > button.submit_app.btn.btn-primary').click()
    cy.get('#m_ver_menu > ul > li:nth-child(4) > a > span > span > span').click()
    
    
    

   
    
    
    

    
    
    

    
    
    
   
    
    
    
    
    
    



    
    
    
    
   
    
    
    

    

    
    
    
    
    

   

    

  






    


    


    
   



    


  })
})