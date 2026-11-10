import { expect, test } from '../../support/fixtures';

const invalidPasswords = ['', 'ab', 'a'.repeat(101)];

for (const password of invalidPasswords) {
  test(`rejects a password of length ${password.length}`, async ({ registerApi }) => {
    const result = await registerApi.register({
      login: 'pwlenuser',
      email: 'pwlenuser@example.com',
      password,
    });

    expect(result.status).toBe(400);
    expect(result.json?.message).toBe('error.validation');
    expect(result.json?.fieldErrors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          field: 'password',
          message: 'size must be between 4 and 100',
        }),
      ]),
    );
    expect(result.text).not.toContain('activationKey');
    expect(result.text).not.toContain('activation_key');
  });
}

for (const login of ['admin', 'Admin']) {
  test(`rejects an activated login ${login}`, async ({ registerApi }) => {
    const result = await registerApi.register({
      login,
      email: `dup.${login.toLowerCase()}.${Date.now()}@example.com`,
      password: 'secret1',
    });

    expect(result.status).toBe(400);
    expect(result.json?.message).toBe('error.userexists');
    expect(result.text).not.toContain('secret1');
    expect(result.text).not.toContain('activation_key');
  });
}

test('stores an inactive user with ROLE_USER', async ({ registerApi, usersDb }) => {
  test.skip(!usersDb, 'Set DATABASE_URL to the Postgres database the app writes to');

  const login = `reg${Date.now().toString(36)}`;
  const email = `${login}@example.com`;
  const password = 'secret1';

  try {
    const result = await registerApi.register({ login, email, password });
    expect(result.status).toBe(201);
    expect(result.text).toBe('');

    const user = await usersDb!.findByLogin(login);
    expect(user).not.toBeNull();
    expect(user!.login).toBe(login);
    expect(user!.email).toBe(email);
    expect(user!.activated).toBe(false);
    expect(user!.lang_key).toBe('en');
    expect(user!.password_hash).toHaveLength(60);
    expect(user!.password_hash).not.toBe(password);
    expect(user!.activation_key).toBeTruthy();
    expect(await usersDb!.authorities(user!.id)).toEqual(['ROLE_USER']);
  } finally {
    await usersDb!.deleteByLogin(login);
  }
});
