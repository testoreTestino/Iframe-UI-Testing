import 'cypress-iframe'

describe('Test Iframe with the external dependency', () => {

    it('should load correct url', () => {
        cy.visit('http://127.0.0.1:8181/login');
    })

    it('type user and password', () => {
        cy.get(':nth-child(1) > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('62702')

        cy.get(':nth-child(2) > .ant-col-24 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper').type('IExV4T')
        cy.get('.ant-btn').click()
        cy.contains('Login').click({force: true})
    })

    it('Open MMS Insights menu', () => {

        cy.wait(4000);

        // Cypress.config('scrollBehavior',false);

        cy.get(':nth-child(5) > .ant-menu-submenu-title').click()
        cy.contains('MMS insights').click()
        cy.get('[data-menu-id$=-insights]').should('be.visible');

        cy.wait(20000);
    })

    it('Access MMS iframe', () => {
        cy.pause();
        cy.frameLoaded('iframe]').iframeCustom().find('iframe[id=app-mms]').iframeCustom();

        cy.iframe().find('[data-cy="filterPanel"]').should('be.visible')
        cy.iframe().find('[data-cy="printButton"]').should('be.visible').click()

    })
})
