import { test, expect } from '@playwright/test';

  test.describe('Iframe test', () => {

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://127.0.0.1:8181/login');
  });

test('my test', async ({ page }) => {

    await page.locator('[placeholder="Crew member ID"]').click();
    // Fill [placeholder="Crew member ID"]
    await page.locator('[placeholder="Crew member ID"]').fill('62702');

    // Click [placeholder="Enter password"]
    await page.locator('[placeholder="Enter password"]').click();
    // Fill [placeholder="Enter password"]
    await page.locator('[placeholder="Enter password"]').fill('IExV4T');

    await page.locator('button:has-text("Login")').click();

  // Click text=MMS >> nth=0
  await page.locator('text=MMS').first().click();
  // Click a:has-text("MMS insights")
  await page.locator('a:has-text("MMS insights")').click();
  // assert.equal(page.url(), 'http://127.0.0.1:8181/app-mms/insights');
  // Click [placeholder="Start month"]

  const title = page.frameLocator('#app-mms').locator('text=Maintenance Status Dashboard');
  await expect(title).toHaveText('Maintenance Status Dashboard');

  await page.frameLocator('#app-mms').locator('[placeholder="Start month"]').click();
  // Click .antv4-picker-cell.antv4-picker-cell-in-view.antv4-picker-cell-in-range .antv4-picker-cell-inner >> nth=0
  await page.frameLocator('#app-mms').locator('.antv4-picker-cell.antv4-picker-cell-in-view.antv4-picker-cell-in-range .antv4-picker-cell-inner').first().click();
  // Click text=Maintenance Status DashboardPrint
  await page.frameLocator('#app-mms').locator('text=Maintenance Status DashboardPrint').click();
  
  });
});

