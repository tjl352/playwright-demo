# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-006 — Block sign-in before activation

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-006
**Priority:** Medium
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And an inactive account exists for login "jane.doe" with password "secret1"
- And that account has not been activated

## Steps

1. When the visitor attempts to sign in as "jane.doe" with password "secret1"

## Expected result

- Then sign-in is rejected
- And the account remains inactive
- And the activation link is not opened

## Notes

Activating the account is [FEAT-002](../../feature-tickets/FEAT-002-account-activation.md). This case only checks that a new registration cannot be used to sign in.
