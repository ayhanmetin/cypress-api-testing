/// <reference types="Cypress" />


describe('http requests', () => {
  it('GET call', () => {

    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    })

  });

  it('GET call 2', () => {

    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('eq', 200)

  });

  it('POST call', () => {

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: "Test post",
        body: "this is a post call",
        userId: "1"
      }
    })
    .its('status')
    .should('eq', 201);
  });

  
  it('POST call 2', () => {
    const requestBody = {
      "title": "Test post",
      "body": "this is a post call",
      "userId": "1"
    };

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: requestBody,
    })
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq(requestBody.title);
      expect(response.body.body).to.eq(requestBody.body);
      expect(response.body.userId).to.eq(requestBody.userId);
    });
  });

  it('PUT call', () => {
    
    cy.request({

      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: {
        title: "Test post",
        body: "this is a post call",
        userId: "1",
          id: 1
      }
    })
    .its('status')
    .should('equal', 200);
  });

  it('DELETE call', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    })
    .its('status')
    .should('equal', 200)
  });
  
});