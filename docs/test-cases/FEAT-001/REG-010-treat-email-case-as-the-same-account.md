# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-010 — Treat email case as the same account

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-010
**Priority:** High
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given an activated account already uses email "admin@localhost"
- And no account exists for login "case.email"

## Steps

1. When a client posts to `/api/register` with login "case.email", email "ADMIN@LOCALHOST", password "secret1", and langKey "en"

## Expected result

- Then the API responds 400 Bad Request
- And the problem message is `error.emailexists`
- And the detail is "Email is already in use!"
- And no second account is created
- And no activation email is sent
