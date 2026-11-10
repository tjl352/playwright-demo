# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-027 — Keep the password and activation key out of the response

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-027
**Priority:** High
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given an activated account already uses login "admin"
- And no account exists for login "secret.keep" or email "secret.keep@example.com"

## Steps

1. When a client posts a valid new registration to `/api/register`
2. And a client posts a registration whose password is shorter than 4 characters
3. And a client posts a registration with login "admin" and a new email

## Expected result

- Then the 201 body is empty
- And the 201 body does not contain the submitted password
- And the 201 body does not contain an activation key
- And each 400 body does not contain the submitted password
- And each 400 body does not contain an activation key

## Notes

The story requires the response to omit the password and the activation key. On the current build, a 400 validation `detail` string echoes the rejected password, so the password assertion on that response fails until the response is changed.
