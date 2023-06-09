/// <reference types="Cypress" />

describe('Authentication', () => {
  
it('basic authentication', () => {
  cy.request({
    method: 'GET',
    url: 'https://postman-echo.com/basic-auth',
    auth: {
      user: 'postman',
      pass: 'password'
    }
  }).then((response) =>{
    expect(response.status).to.eq(200)
    expect(response.body.authenticated).to.eq(true)
  })
});

it('digest authentication', () => {
  cy.request({
    method: 'GET',
    url: 'https://postman-echo.com/basic-auth',
    auth: {
      user: 'postman',
      pass: 'password',
      method: 'degest'
    }
  })
});

});