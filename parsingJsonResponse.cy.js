/// <reference types="Cypress" />

describe('parsing JSON response', () => {
  
  it('parsing SIMPLE JSON response', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products'
    }).then((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body[0].id).to.eq(1)
      expect(response.body[0].title).to.eq("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
      expect(response.body[1].price).to.eq(22.3)
      expect(response.body[2].category).to.eq("men's clothing")
      expect(response.body[3].rating.rate).to.eq(2.1)
      expect(response.body[3].rating).to.deep.equal({ rate: 2.1, count: 430 })
    })
  });

  it.only('parsing COMPLEX JSON response', () => {

    let totalPrice = 0;
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      qs: {limit:5}

    }).then((response) =>{
      expect(response.status).to.eq(200)
      response.body.forEach(element => {
        totalPrice += element.price;
      });
      
      expect(totalPrice).to.equal(899.23)

    })
  });



});