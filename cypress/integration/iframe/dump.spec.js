// it('try indian',()=>{
//     cy.get('iframe[id=app-mms]').then(($iFrame)=>{
//     const IframeContent =    $iFrame.contents().find('body')
//     cy.wrap(IframeContent).find('[data-cy="dashboardHeader"]').should('be.visible').and('have.text','Manintenance Status DashboardPrint')
//     cy.wrap(IframeContent).find(charElementinMmsInsights.chartsWrapper).should('be.visible').click()
// })
// })






// it('Promise',()=>{

//     cy.get('iframe[id=app-mms]').iframe().as('iframeContent')
//     cy.get('@iframeContent').then((iframeContent) => {
//         cy.get(iframeContent).find('[data-cy="dashboardHeader"]').should('be.visible').and('have.text','Maintenance Status DashboardPrint')
//         cy.get(iframeContent).find(charElementinMmsInsights.chartsWrapper).click()
//     })


// })