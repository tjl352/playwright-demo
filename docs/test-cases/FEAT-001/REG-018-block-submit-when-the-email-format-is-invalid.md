# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-018 — Block submit when the email format is invalid

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-018
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username, password, and confirmation are valid

## Steps

1. When the visitor enters email "not-an-email"
2. And the visitor submits the registration form

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "Your email is invalid." is shown
