# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-008 — Treat login case as the same account

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-008
**Priority:** High
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given an activated account already uses login "admin"
- And no account exists for email "case.login@example.com"

## Steps

1. When a client posts to `/api/register` with login "Admin", email "case.login@example.com", password "secret1", and langKey "en"

## Expected result

- Then the API responds 400 Bad Request
- And the problem message is `error.userexists`
- And the detail is "Login name already used!"
- And no second account is created
- And no activation email is sent
