# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-023 — Show a password strength bar

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-023
**Priority:** Medium
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page

## Steps

1. When the visitor enters password "secret1"
2. And the visitor enters the same password as confirmation
3. And the visitor enters a valid username and email that are not already activated
4. And the visitor submits the registration form

## Expected result

- Then a password strength bar labeled "Password strength:" is shown while the password is typed
- And the bar has five segments
- And the bar changes as the password changes
- And the strength bar does not block submit
- And the registration request is sent when the other fields are valid
