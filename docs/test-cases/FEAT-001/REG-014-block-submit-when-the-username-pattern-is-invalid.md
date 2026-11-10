# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-014 — Block submit when the username pattern is invalid

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-014
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And email, password, and confirmation are valid

## Steps

1. When the visitor enters username "jane doe"
2. And the visitor submits the registration form

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "Your username is invalid." is shown

## Notes

A username of letters, digits, and `_.@-` is accepted. `Jane_.@-1` produces no username error. An email-shaped login is also inside the allowed pattern.
