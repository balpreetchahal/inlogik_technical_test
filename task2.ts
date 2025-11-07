import { test, expect } from '@playwright/test';

test.describe.only('Customer Registration', () => {

test.beforeEach(async ({ page }) => {
      await page.goto('https://yourapp.com/register');
    });
 
test('Customer registration flow - verify form submission and confirmation details', async () => {
  // Click "Register as Customer"
  await page.getByTestId('btn-register-customer').click();

  // Enter Email and click Next
  const testEmail = `user_${Date.now()}@example.com`;
  await page.getByTestId('input-email').fill(testEmail);
  await page.getByTestId('btn-next').click();

  // Enter Password
  await page.getByTestId('input-password').fill('StrongPass@123');
  await page.getByTestId('btn-next').click();

  // Select Service Plan and Submit
  await page.getByTestId('select-service-plan').selectOption('medium'); // or .click() if radio
  await page.getByTestId('btn-submit').click();

  // Validate confirmation screen
  await expect(page.getByTestId('confirmation-header')).toHaveText(`Thank you for registering ${testEmail}`);
  await expect(page.getByTestId('confirmation-body')).toContainText("Your unique registration id is");

  // Verify registration ID format
  const registrationId = await page.getByTestId('registration-id').textContent();
  expect(registrationId).toMatch(/REG-\d+/); // Adjust regex to your real format

  console.log(`Registration successful with ID: ${registrationId}`);
});

});
