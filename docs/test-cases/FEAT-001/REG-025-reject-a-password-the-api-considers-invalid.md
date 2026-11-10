# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-025 — Reject a password the API considers invalid

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-025
**Priority:** High
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given no account exists for login "pwlen.user" or email "pwlen.user@example.com"

## Steps

1. When a client posts to `/api/register` with login "pwlen.user", email "pwlen.user@example.com", langKey "en", and an empty password
2. And the same request is sent with a password of 3 characters
3. And the same request is sent with a password of 101 characters

## Expected result

- Then each response is 400 Bad Request
- And the problem message is `error.validation`
- And the password field error is "size must be between 4 and 100"
- And no user is stored
- And no activation email is sent
