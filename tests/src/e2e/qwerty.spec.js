// @ts-check/////
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto( `https://www.google.com/`);

  // Expect a title "to contain" a substring./.....................................
  await page.locator('textarea[title="Search"]').click();
});
