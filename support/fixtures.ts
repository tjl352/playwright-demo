import { test as base } from '@playwright/test';
import { RegisterClient } from './api/register.client';
import { UsersDb } from './db/users';
import { RegisterPage } from './pages/register.page';

type Fixtures = {
  registerPage: RegisterPage;
  registerApi: RegisterClient;
  usersDb: UsersDb | null;
};

export const test = base.extend<Fixtures>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  registerApi: async ({ request }, use) => {
    await use(new RegisterClient(request));
  },
  usersDb: async ({}, use) => {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      await use(null);
      return;
    }
    const db = new UsersDb(connectionString);
    await use(db);
    await db.close();
  },
});

export { expect } from '@playwright/test';
