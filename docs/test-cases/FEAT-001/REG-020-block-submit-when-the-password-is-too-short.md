# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-020 — Block submit when the password is too short

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-020
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username and email are valid

## Steps

1. When the visitor enters password "abc"
2. And the visitor enters confirmation "abc"
3. And the visitor submits the registration form

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "Your password is required to be at least 4 characters." is shown
- And "Your confirmation password is required to be at least 4 characters." is shown
