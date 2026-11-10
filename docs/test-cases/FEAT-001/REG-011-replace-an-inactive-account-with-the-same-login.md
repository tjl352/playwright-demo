# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-011 — Replace an inactive account with the same login

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-011
**Priority:** High
**Components:** Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And an inactive account already uses login "jane.doe"
- And that account has an activation key and a password hash
- And a test mailbox is capturing outbound mail

## Steps

1. When the visitor successfully registers with username "jane.doe"
2. And the visitor uses a new email and a new password

## Expected result

- Then the previous inactive account is removed
- And one new inactive account is stored for login "jane.doe"
- And the stored password hash and activation key differ from the removed account
- And the user has authority "ROLE_USER" only
- And an activation email is sent for the new account
