# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-015 — Block submit when the username is too long

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-015
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And email, password, and confirmation are valid

## Steps

1. When the visitor enters a username of 50 allowed characters
2. And the visitor leaves the username field
3. When the visitor enters a username of 51 allowed characters
4. And the visitor submits the registration form

## Expected result

- Then 50 characters produces no username length error
- And 51 characters shows "Your username cannot be longer than 50 characters."
- And the form is not submitted for the 51-character username
- And `POST /api/register` is not called
