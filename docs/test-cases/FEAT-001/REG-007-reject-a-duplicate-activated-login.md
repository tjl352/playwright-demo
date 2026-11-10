# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-007 — Reject a duplicate activated login

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-007
**Priority:** High
**Components:** UI, API, Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And an activated account already uses login "admin"
- And no account exists for email "new.person@example.com"

## Steps

1. When the visitor enters username "admin"
2. And the visitor enters email "new.person@example.com"
3. And the visitor enters password "secret1"
4. And the visitor enters the same password as confirmation
5. And the visitor submits the registration form

## Expected result

- Then the registration is rejected
- And the page stays on `/account/register`
- And the error "Login name already used!" is shown
- And the API responds 400 Bad Request
- And the problem type is `https://www.jhipster.tech/problem/login-already-used`
- And the problem message is `error.userexists`
- And no second account is created
- And no activation email is sent
