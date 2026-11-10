# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-012 — Replace an inactive account with the same email

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-012
**Priority:** High
**Components:** Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And an inactive account already uses email "jane.doe@example.com"
- And that account uses a different login from the one in this registration
- And a test mailbox is capturing outbound mail

## Steps

1. When the visitor successfully registers with email "jane.doe@example.com"
2. And the visitor uses a new username and a new password

## Expected result

- Then the previous inactive account is removed
- And one new inactive account is stored for email "jane.doe@example.com"
- And the stored login is the new username, in lowercase
- And an activation email is sent for the new account
