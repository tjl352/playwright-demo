# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-024 — Do not call the API until the form is valid

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-024
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page

## Steps

1. When the visitor submits the form with a required field empty
2. And the visitor submits the form with username "jane doe"
3. And the visitor submits the form with email "not-an-email"
4. And the visitor submits the form with password "abc" and confirmation "abc"
5. And the visitor submits the form with password "secret1" and confirmation "secret2"

## Expected result

- Then each submit keeps the visitor on `/account/register`
- And the corresponding field error is shown
- And `POST /api/register` is not called for any of these submits
