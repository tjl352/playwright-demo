import { expect, type Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/account/register');
    await this.page.evaluate(() => {
      document.getElementById('webpack-dev-server-client-overlay')?.remove();
    });
  }

  async submit(user: { username: string; email: string; password: string; confirm?: string }) {
    await this.page.getByRole('textbox', { name: 'Your username' }).fill(user.username);
    await this.page.getByRole('textbox', { name: 'Your email' }).fill(user.email);
    await this.page.getByRole('textbox', { name: 'New password', exact: true }).fill(user.password);
    await this.page.getByRole('textbox', { name: 'Confirm the new password', exact: true }).fill(user.confirm ?? user.password);
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async submitEmpty() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }

  async expectError(message: string) {
    await expect(this.page.getByText(message, { exact: true })).toBeVisible();
  }
}
