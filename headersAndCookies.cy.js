describe('Api Testing', () => {
  let authToken = null;

  before('get a token', () => {
    cy.request({
      method: 'POST',
      url: 'https://simple-books-api.glitch.me/api-clients/',
      headers: { 'Content-Type': 'application/json' },
      body: {
        clientName: 'ABC',
        clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
      }
    }).then((response) => {
      authToken = response.body.accessToken;
      // Move the 'new order' request here
      cy.request({
        method: 'POST',
        url: 'https://simple-books-api.glitch.me/orders/',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        body: {
          "bookId": 1,
          "customName": "xyzabc"
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true);
      });
    });
  });

  it('fetching the orders', () => {
    cy.request({
      method: 'GET',
      url: 'https://simple-books-api.glitch.me/orders/',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authToken
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.length(1);
    });
  });
});
