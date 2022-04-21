describe('Cypress Iframe Test implementation', () => {

    function verifyElementAreVisible(selectors) {
        Object.values(selectors).forEach(verifyElementToBeVisible);
    }

    function verifyElementToBeVisible(element) {
        cy.get(element).should('be.visible')
    }

    const getIframeDocument = () => {
        return cy.get('iframe[id=app-mms]').its('0.contentDocument').should('exist')

    }

    const getIframeDocument2 = () => {
        return cy.get('iframe[id=printWindow]').its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap)
    }

    const getIframeBody2 = () => {
        return getIframeDocument2().its('body').should('not.be.undefined').then(cy.wrap)
    }

    const charElementinMmsInsights = {
        chartsWrapper: '[data-cy="printButton"]',
        workOrderTrendsRow: '[data-cy="totalWOCompletedChart"]'
    }

    it('should load correct url', () => {
        cy.visit('http://127.0.0.1:8181/login');
    })

    it('type user and password', () => {
        cy.get(':nth-child(1) > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('62702')

        cy.get(':nth-child(2) > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('IExV4T')
        cy.get('.ant-btn').click()
        cy.contains('Login').click({force: true})
    })

    it('Open Mss insight', () => {

        cy.wait(4000);

        // Cypress.config('scrollBehavior',false);

        cy.get(':nth-child(4) > .ant-menu-submenu-title > .ant-menu-title-content').click()
        cy.contains('MMS insights').click()
        cy.get('[data-menu-id$=-insights]').should('be.visible');
    })

    it('Enter iframe wit', () => {
        cy.wait(2000);
        getIframeBody().find('[data-cy="dashboardHeader"]').should('be.visible')
            // Cypress.config('scrollBehavior','top');
            .and('have.text', 'Maintenance Stats DashboardPrint')

        getIframeBody().find('[data-cy="filterPanel"]').should('be.visible')
        getIframeBody().find(charElementinMmsInsights.chartsWrapper).should('be.visible').click()

        //Scrolling is a really hard concept in an iframe
        // cy.get('#app-mms').scrollTo('bottom')

        //Nested Iframe is Pain for a QA
        // cy.get('iframe[id=printWindow]').its('0.contentDocument').should('exist')

    })
})



