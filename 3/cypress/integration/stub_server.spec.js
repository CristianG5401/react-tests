/// <reference types="Cypress" />
const api = Cypress.env('external_api')

describe('attempt to create a test server', function () {
  it('start a server', function () {
    cy.server() // enable response stubbing
    cy.fixture('grouped_reports.json').as('groupedReports')
    cy.route({
      method: 'GET', // Route all GET requests
      url: `${api}/reports`, // that have a URL that matches '/users/*'
      response: '@groupedReports'
    }).as('getReports')

    cy.visit('/')
  })
})
