/// <reference types="Cypress" />

import scenarios from '../../fixtures/scenario-data.json'

scenarios.forEach(scenario => {
     
     context('Actions', () => {
        before(() => {
            cy.visit('https://example.cypress.io/commands/actions')
        })

        describe(scenario.name, () => {
            it('Test Email', () => {
                cy.get('.action-email')
                    .type(scenario.data.email).should('have.value', scenario.data.email+'2')
            })
        })
    })
    
})  