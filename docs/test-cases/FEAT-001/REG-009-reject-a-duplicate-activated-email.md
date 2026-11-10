# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-009 — Reject a duplicate activated email

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-009
**Priority:** High
**Components:** UI, API, Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And an activated account already uses email "admin@localhost"
- And no account exists for login "new.person"

## Steps

1. When the visitor enters username "new.person"
2. And the visitor enters email "admin@localhost"
3. And the visitor enters password "secret1"
4. And the visitor enters the same password as confirmation
5. And the visitor submits the registration form

## Expected result

- Then the registration is rejected
- And the page stays on `/account/register`
- And an email-already-used error is shown
- And the API responds 400 Bad Request
- And the problem type is `https://www.jhipster.tech/problem/email-already-used`
- And the problem message is `error.emailexists`
- And the detail is "Email is already in use!"
- And no second account is created
- And no activation email is sent
