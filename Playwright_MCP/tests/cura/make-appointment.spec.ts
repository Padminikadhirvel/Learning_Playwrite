import { test, expect } from '@playwright/test';

/**
 * Test Suite: CURA Healthcare Service - Make Appointment
 * Application URL: https://katalon-demo-cura.herokuapp.com/
 *
 * User Story:
 *   As an authenticated user, I want to make an appointment at a CURA
 *   healthcare facility so that I can receive the healthcare service I need.
 *
 * Test Credentials:
 *   Username: John Doe
 *   Password: ThisIsNotAPassword
 *
 * Happy Path Flow:
 *   1. Open homepage
 *   2. Click "Make Appointment"  →  redirects to login page
 *   3. Enter credentials and Login
 *   4. Fill the appointment form (Facility, Readmission, Program, Date, Comment)
 *   5. Click "Book Appointment"
 *   6. Verify the "Appointment Confirmation" summary page
 */

const BASE_URL = 'https://katalon-demo-cura.herokuapp.com';

const CREDENTIALS = {
  username: 'John Doe',
  password: 'ThisIsNotAPassword',
};

const APPOINTMENT = {
  facility: 'Hongkong CURA Healthcare Center',
  readmission: true,
  program: 'Medicaid',
  visitDate: '26/03/2026',
  comment: 'Routine health checkup',
};

// ---------------------------------------------------------------------------
// Helper: login to CURA
// ---------------------------------------------------------------------------
async function login(page: any) {
  await page.getByLabel('Username').fill(CREDENTIALS.username);
  await page.getByLabel('Password').fill(CREDENTIALS.password);
  await page.getByRole('button', { name: 'Login' }).click();
}

// ---------------------------------------------------------------------------
// Test Cases
// ---------------------------------------------------------------------------

test.describe('CURA Healthcare – Make Appointment (Happy Path)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  // -------------------------------------------------------------------------
  // TC-01: Homepage loads with "Make Appointment" button visible
  // -------------------------------------------------------------------------
  test('TC-01 – Homepage displays Make Appointment button', async ({ page }) => {
    await expect(page).toHaveTitle(/CURA Healthcare Service/);
    await expect(page.getByRole('link', { name: 'Make Appointment' })).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-02: Clicking "Make Appointment" redirects to login page
  // -------------------------------------------------------------------------
  test('TC-02 – Make Appointment redirects unauthenticated user to Login', async ({ page }) => {
    await page.getByRole('link', { name: 'Make Appointment' }).click();

    await expect(page).toHaveURL(/profile\.php/);
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-03: Successful login with valid credentials
  // -------------------------------------------------------------------------
  test('TC-03 – Valid credentials allow login and load appointment form', async ({ page }) => {
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await login(page);

    // After login the URL changes to the appointment section
    await expect(page).toHaveURL(/#appointment/);
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-04: Appointment form displays all expected fields
  // -------------------------------------------------------------------------
  test('TC-04 – Appointment form contains all required fields', async ({ page }) => {
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await login(page);

    await expect(page.getByLabel('Facility')).toBeVisible();
    await expect(page.getByRole('checkbox', { name: 'Apply for hospital readmission' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'Medicare' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'Medicaid' })).toBeVisible();
    await expect(page.getByRole('radio', { name: 'None' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Visit Date (Required)' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Comment' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Book Appointment' })).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-05: Successful end-to-end appointment booking (core happy-path)
  // -------------------------------------------------------------------------
  test('TC-05 – Full happy path: book appointment and verify confirmation', async ({ page }) => {
    // Step 1 – Click Make Appointment from homepage
    await page.getByRole('link', { name: 'Make Appointment' }).click();

    // Step 2 – Login
    await login(page);

    // Step 3 – Fill the appointment form
    // 3a. Select Facility
    await page.getByLabel('Facility').selectOption(APPOINTMENT.facility);

    // 3b. Check "Apply for hospital readmission"
    if (APPOINTMENT.readmission) {
      await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
    }

    // 3c. Select Healthcare Program
    await page.getByRole('radio', { name: APPOINTMENT.program }).click();

    // 3d. Enter Visit Date via date-picker calendar
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    // The date picker opens as a calendar; select the matching day cell
    const [day, month, year] = APPOINTMENT.visitDate.split('/');
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill(APPOINTMENT.visitDate);
    // Click the correct day in the calendar grid (pick the one that is interactive)
    await page
      .getByRole('cell', { name: day, exact: true })
      .filter({ hasText: day })
      .last()
      .click({ force: true });

    // 3e. Enter Comment
    await page.getByRole('textbox', { name: 'Comment' }).fill(APPOINTMENT.comment);

    // Step 4 – Book Appointment
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    // Step 5 – Verify Confirmation Page
    await expect(page).toHaveURL(/appointment\.php/);

    // 5a. Confirmation heading
    await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();

    // 5b. Confirmation message
    await expect(
      page.getByText('Please be informed that your appointment has been booked as following:')
    ).toBeVisible();

    // 5c. Verify booked details
    await expect(page.locator('#facility')).toHaveText(APPOINTMENT.facility);
    await expect(page.locator('#hospital_readmission')).toHaveText('Yes');
    await expect(page.locator('#program')).toHaveText(APPOINTMENT.program);
    await expect(page.locator('#visit_date')).toHaveText(APPOINTMENT.visitDate);
    await expect(page.locator('#comment')).toHaveText(APPOINTMENT.comment);

    // 5d. "Go to Homepage" link is available
    await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-06: "Go to Homepage" link on confirmation page navigates home
  // -------------------------------------------------------------------------
  test('TC-06 – Go to Homepage link on confirmation page works', async ({ page }) => {
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await login(page);

    await page.getByLabel('Facility').selectOption(APPOINTMENT.facility);
    await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
    await page.getByRole('radio', { name: APPOINTMENT.program }).click();
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
    await page.getByRole('textbox', { name: 'Visit Date (Required)' }).fill(APPOINTMENT.visitDate);
    await page.getByRole('cell', { name: '26', exact: true }).last().click({ force: true });
    await page.getByRole('textbox', { name: 'Comment' }).fill(APPOINTMENT.comment);
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();

    await page.getByRole('link', { name: 'Go to Homepage' }).click();
    await expect(page).toHaveURL(BASE_URL + '/');
    await expect(page.getByRole('link', { name: 'Make Appointment' })).toBeVisible();
  });

});

// ---------------------------------------------------------------------------
// Negative Test Cases
// ---------------------------------------------------------------------------

test.describe('CURA Healthcare – Make Appointment (Negative Cases)', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/profile.php#login`);
  });

  // -------------------------------------------------------------------------
  // TC-07: Login fails with invalid credentials
  // -------------------------------------------------------------------------
  test('TC-07 – Invalid credentials show error message', async ({ page }) => {
    await page.getByLabel('Username').fill('WrongUser');
    await page.getByLabel('Password').fill('WrongPassword');
    await page.getByRole('button', { name: 'Login' }).click();

    // Should stay on login page and show an error
    await expect(page).toHaveURL(/profile\.php/);
    await expect(page.getByText(/Login failed|incorrect|invalid/i)).toBeVisible();
  });

  // -------------------------------------------------------------------------
  // TC-08: Booking fails without a visit date
  // -------------------------------------------------------------------------
  test('TC-08 – Booking without Visit Date is blocked', async ({ page }) => {
    await page.getByLabel('Username').fill(CREDENTIALS.username);
    await page.getByLabel('Password').fill(CREDENTIALS.password);
    await page.getByRole('button', { name: 'Login' }).click();

    // Do NOT fill in the date
    await page.getByLabel('Facility').selectOption(APPOINTMENT.facility);
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    // Confirmation page must NOT have loaded
    await expect(page).not.toHaveURL(/appointment\.php/);
  });

});
