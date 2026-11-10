# playwright-demo

Bare-minimum Playwright checks for fullstackapp user registration. UI tests open `/account/register`. API tests call `POST /api/register`. A Postgres check reads `jhi_user` and `jhi_user_authority` when `DATABASE_URL` is set.

## What this implements

* **JavaScript/TypeScript, Node.js, Playwright, REST, and PostgreSQL.** Tests are TypeScript on Node. `support/pages/register.page.ts` drives the form, `support/api/register.client.ts` calls the registration API, and `support/db/users.ts` queries Postgres with `pg`.
* **Reusable UI and API coverage for functional, integration, and data-driven tests.** The page object and API client are shared. One functional test checks the empty form. A data table checks invalid username, email, password, and confirmation. One integration test creates a user through the API and reads the row back.
* **PostgreSQL validation and test data.** With `DATABASE_URL` set, the integration test checks lowercase login and email, `activated = false`, `lang_key = en`, a 60-character password hash, an activation key, and only `ROLE_USER`. It deletes that login afterward. Each run uses a unique `reg…` login.
* **REST API and backend checks.** Invalid password lengths return 400 `error.validation`. Logins `admin` and `Admin` return 400 `error.userexists`. Responses do not include an activation key.
* **GitHub Actions.** `.github/workflows/playwright.yml` runs this suite on every push and pull request to `main` or `master`.
* **A small, isolated layout.** `support/fixtures.ts` supplies the page, the API client, and the database. Tests do not share users. CI uses one Chromium worker, retries twice, and saves a trace on the first retry.

## How to run

The app should already be running. The default base URL is `http://localhost:9000`.

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

Set the database URL to run the Postgres check locally. Use the `postgres` database the app already has:

```bash
export DATABASE_URL=postgresql://postgres@localhost:5432/postgres
npx playwright test
```

Other useful commands:

```bash
npx playwright test --ui
npx playwright test tests/ui
npx playwright test tests/api
npx playwright test --debug
```

`BASE_URL` overrides the app address:

```bash
BASE_URL=http://localhost:8080 npx playwright test
```

## GitHub Actions

The workflow runs on push and pull request. It checks out the repo, installs Node and Chromium, then runs `npx playwright test`. The HTML report is uploaded as an artifact for 30 days, including traces from retries.

The workflow starts Postgres 17 and sets `DATABASE_URL` to `postgresql://postgres:postgres@localhost:5432/postgres`. The database test runs on every push without a repository secret. Set the `DATABASE_URL` secret only to point the check at a different database.

Set the `BASE_URL` repository variable to the deployed app. The database test registers through that URL and reads the CI database, so the app must store users in that same database.

| Name | Kind | Required | Example |
| --- | --- | --- | --- |
| `BASE_URL` | Variable | Yes, for a passing run | `https://fullstackapp.example.com` |
| `DATABASE_URL` | Secret | No | `postgresql://postgres:postgres@localhost:5432/postgres` |
