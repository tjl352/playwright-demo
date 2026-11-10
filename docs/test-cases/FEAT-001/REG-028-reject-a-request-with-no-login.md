# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-028 — Reject a request with no login

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-028
**Priority:** Medium
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given the client is not authenticated

## Steps

1. When a client posts `{}` to `/api/register`

## Expected result

- Then the API responds 400 Bad Request
- And the problem message is `error.validation`
- And the login field error is "must not be blank"
- And no user is stored
- And no activation email is sent
