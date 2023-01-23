describe('ui test', () => {
  it('should open', () => {
    cy.visit('http://localhost:3000')
  })

  it('select should contain data', () => {
    cy.visit('http://localhost:3000')
    cy.get('select').its('length').should("gt", 0)
  })

  it('description should be shown', () => {
    cy.visit('http://localhost:3000')
    cy.get('p').its('length').should("gt", 0)
  })
})