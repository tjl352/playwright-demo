# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-005 — Store login and email in lowercase

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-005
**Priority:** High
**Components:** Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And no account exists for login "jane.doe" or email "jane.doe@example.com"

## Steps

1. When the visitor registers with username "Jane.Doe" and email "Jane.Doe@Example.com"
2. And the password and confirmation are a matching valid password
3. And the visitor submits the registration form

## Expected result

- Then the registration succeeds
- And the stored login is "jane.doe"
- And the stored email is "jane.doe@example.com"
