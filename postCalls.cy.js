/// <reference types="Cypress" />

describe('api testing', () => {
  
  it('POST 1', () => {
    
    const requestBody = {
      tourist_name: Math.random().toString(5).substring(2),
      tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
      tourist_location: "Paris"
    }

    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/Tourist',
      body: requestBody,

    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
      expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
      expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

      expect(response.body).has.property('tourist_email', requestBody.tourist_email);
    })

  });

  it('POST 2', () => {
    
    cy.fixture('tourist').then((data) => {
      const requestBody = data;
  
    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/Tourist',
      body: requestBody,
  
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
      expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
      expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
    })
  });

  })

});
