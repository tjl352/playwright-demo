# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-013 — Block submit when a required field is empty

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-013
**Priority:** High
**Components:** UI
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page

## Steps

1. When the visitor submits the form with username, email, password, and confirmation empty

## Expected result

- Then the form is not submitted
- And `POST /api/register` is not called
- And "Your username is required." is shown
- And "Your email is required." is shown
- And "Your password is required." is shown
- And "Your confirmation password is required." is shown

## Notes

Repeat the submit with each field empty on its own. The empty field shows its required message, and the form is still not submitted.
