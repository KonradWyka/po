describe('Test Example Cypress Page', () => {
    it('Test Case 1: Check if the main page loads correctly', () => {
        cy.visit('https://example.cypress.io')
        cy.get('h1').should('be.visible')
        cy.get('h2').contains('Commands').should('be.visible')
        cy.get('a').contains('Querying').should('not.be.visible')
        cy.get('a').contains('Actions').should('not.be.visible')
        cy.get('a').contains('Window').should('not.be.visible')
        cy.get('a').contains('Viewport').should('not.be.visible')
        cy.get('a').contains('Location').should('not.be.visible')
        cy.get('a').contains('Navigation').should('not.be.visible')
        cy.get('a').contains('Assertions').should('not.be.visible')
        cy.get('a').contains('Misc').should('not.be.visible')
        cy.get('a').contains('Connectors').should('not.be.visible')
        cy.get('a').contains('Aliasing').should('not.be.visible')
        cy.get('a').contains('Waiting').should('not.be.visible')
        cy.get('a').contains('Network Requests').should('not.be.visible')
        cy.get('a').contains('Files').should('not.be.visible')
        cy.get('a').contains('Storage').should('not.be.visible')
        cy.get('a').contains('Cookies').should('not.be.visible')
        cy.get('a').contains('Spies, Stubs & Clocks').should('not.be.visible')
        cy.get('#utilities').should('be.visible')
        cy.get('#utilities').within(() => {
            cy.contains('Commands').should('be.visible')
            cy.get('p').should('be.visible')
        })
        cy.get('.container').should('be.visible')
        cy.get('.row').should('be.visible')
    })

    it('Test Case 2: Check if the "type" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('type').click()
        cy.get('h1').should('be.visible')
    })

    it('Test Case 3: Check if the "click" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('click').click()
        cy.get('h2').should('be.visible')
    })

    it('Test Case 4: Check if the "navigation" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/navigation')
        cy.get('h1').should('be.visible')
    })

    it('Test Case 5: Check if the "window" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/window')
        cy.get('h1').should('be.visible')
    })

    it('Test Case 6: Check if the "viewport" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/viewport')
        cy.get('h1').contains('Viewport').should('be.visible')
    })

    it('Test Case 7: Check if the "location" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/location')
        cy.get('h1').contains('Location').should('be.visible')
    })

    it('Test Case 8: Check if the "assertions" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/assertions')
        cy.get('h1').contains('Assertions').should('be.visible')
    })

    it('Test Case 9: Check if the "misc" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/misc')
        cy.get('h1').contains('Misc').should('be.visible')
    })

    it('Test Case 10: Check if the "connectors" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/connectors')
        cy.get('h1').contains('Connectors').should('be.visible')
    })

    it('Test Case 11: Check if the "aliasing" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/aliasing')
        cy.get('h1').contains('Aliasing').should('be.visible')
    })

    it('Test Case 12: Check if the "waiting" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/waiting')
        cy.get('h1').contains('Waiting').should('be.visible')
    })

    it('Test Case 13: Check if the "network requests" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('h1').contains('Network Requests').should('be.visible')
    })

    it('Test Case 14: Check if the "files" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/files')
        cy.get('h1').contains('Files').should('be.visible')
    })

    it('Test Case 15: Check if the "storage" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/storage')
        cy.get('h1').contains('Storage').should('be.visible')
    })

    it('Test Case 16: Check if the "cookies" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/cookies')
        cy.get('h1').contains('Cookies').should('be.visible')
    })

    it('Test Case 17: Check if the "spies" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('h1').contains('Spies').should('be.visible')
    })

    it('Test Case 18: Check if the "stubs" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('h1').contains('Stubs').should('be.visible')
    })
 
    it('Test Case 19: Check if the "clocks" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
        cy.get('h1').contains('Clocks').should('be.visible')
    })

    it('Test Case 20: Check if the "todo" example is accessible', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.contains('Todo').should('be.visible')
    })

    it('Test Case 21: Check if the "select" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('select').click()
        cy.get('h1').should('be.visible')
    })

    it('Test Case 22: Check if the "dblclick" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('dblclick').click()
        cy.get('h1').should('be.visible')
    })

    it('Test Case 23: Check if the "rightclick" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('rightclick').click()
        cy.get('h1').should('be.visible')
    })

    it('Test Case 24: Check if the "focus" example is accessible', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.contains('focus').click()
        cy.get('h1').should('be.visible')
    })
})
