# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-029 — Send the activation email only after a successful save

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-029
**Priority:** High
**Components:** API, Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And a test mailbox is empty
- And no account exists for login "jane.doe" or email "jane.doe@example.com"
- And an activated account already uses login "admin" and email "admin@localhost"

## Steps

1. When the visitor successfully registers login "jane.doe" and email "jane.doe@example.com"
2. And a client posts a registration with login "admin" and a new email
3. And a client posts a registration with email "admin@localhost" and a new login
4. And a client posts a registration whose password is shorter than 4 characters

## Expected result

- Then the mailbox contains one new message
- And that message is addressed to "jane.doe@example.com"
- And the rejected requests send no activation email
- And the activation link is not opened
