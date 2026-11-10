# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-021 — Block submit when the confirmation does not match

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-021
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username and email are valid

## Steps

1. When the visitor enters password "secret1"
2. And the visitor enters confirmation "secret2"
3. And the visitor submits the registration form

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "The password and its confirmation do not match!" is shown
