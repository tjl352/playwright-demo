# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-017 — Block submit when the email is too short

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-017
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username, password, and confirmation are valid

## Steps

1. When the visitor enters email "bad"
2. And the visitor submits the registration form

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "Your email is required to be at least 5 characters." is shown
