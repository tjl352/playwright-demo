# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-016 — Accept a one-character username

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-016
**Priority:** Medium
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And no account exists for login "a"
- And email, password, and confirmation are valid

## Steps

1. When the visitor enters username "a"
2. And the visitor leaves the username field

## Expected result

- Then no username error is shown
- And the username field is accepted by client validation
