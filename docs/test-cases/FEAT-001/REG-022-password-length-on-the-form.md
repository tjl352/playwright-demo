# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-022 — Password length on the form

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-022
**Priority:** Medium
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username and email are valid

## Steps

1. When the visitor enters a matching password and confirmation of 4 characters
2. And the visitor leaves the password fields
3. When the visitor enters a matching password and confirmation of 50 characters
4. And the visitor leaves the password fields
5. When the visitor enters a matching password and confirmation of 51 characters
6. And the visitor submits the registration form

## Expected result

- Then 4 characters produces no password error
- And 50 characters produces no password error
- And 51 characters shows "Your password cannot be longer than 50 characters."
- And 51 characters shows "Your confirmation password cannot be longer than 50 characters."
- And the form is not submitted for the 51-character password
- And `POST /api/register` is not called
