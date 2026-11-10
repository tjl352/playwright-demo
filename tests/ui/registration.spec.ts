import { expect, test } from '../../support/fixtures';

const invalidRows = [
  {
    username: 'jane doe',
    email: 'jane.doe@example.com',
    password: 'secret1',
    confirm: 'secret1',
    error: 'Your username is invalid.',
  },
  {
    username: 'jane.doe',
    email: 'not-an-email',
    password: 'secret1',
    confirm: 'secret1',
    error: 'Your email is invalid.',
  },
  {
    username: 'jane.doe',
    email: 'jane.doe@example.com',
    password: 'abc',
    confirm: 'abc',
    error: 'Your password is required to be at least 4 characters.',
  },
  {
    username: 'jane.doe',
    email: 'jane.doe@example.com',
    password: 'secret1',
    confirm: 'secret2',
    error: 'The password and its confirmation do not match!',
  },
];

test('registration page is available without signing in', async ({ page, registerPage }) => {
  await registerPage.goto();
  await expect(page).toHaveURL(/\/account\/register$/);
  await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
});

test('empty form shows required fields and does not call the API', async ({ page, registerPage }) => {
  await registerPage.goto();
  let called = false;
  page.on('request', request => {
    if (request.url().includes('/api/register') && request.method() === 'POST') {
      called = true;
    }
  });

  await registerPage.submitEmpty();

  await registerPage.expectError('Your username is required.');
  await registerPage.expectError('Your email is required.');
  await registerPage.expectError('Your password is required.');
  await registerPage.expectError('Your confirmation password is required.');
  expect(called).toBe(false);
});

for (const row of invalidRows) {
  test(`blocks submit: ${row.error}`, async ({ page, registerPage }) => {
    await registerPage.goto();
    let called = false;
    page.on('request', request => {
      if (request.url().includes('/api/register') && request.method() === 'POST') {
        called = true;
      }
    });

    await registerPage.submit(row);

    await registerPage.expectError(row.error);
    expect(called).toBe(false);
  });
}
