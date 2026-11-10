# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-019 — Email length and the too-long message

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-019
**Priority:** Medium
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And username, password, and confirmation are valid

## Steps

1. When the visitor enters a valid email of 51 characters
2. And the visitor leaves the email field
3. When the visitor enters a valid email of 254 characters
4. And the visitor leaves the email field
5. When the visitor enters an email of 255 characters
6. And the visitor submits the registration form

## Expected result

- Then 51 characters produces no email error
- And 254 characters produces no email error
- And 255 characters shows "Your email cannot be longer than 50 characters."
- And the form is not submitted for the 255-character email
- And `POST /api/register` is not called

## Notes

Assert the "50 characters" sentence as the current message. The field still allows 254 characters. This is a known copy mismatch, not a new requirement.
