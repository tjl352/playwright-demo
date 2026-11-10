# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-026 — Accept a password only the API allows

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-026
**Priority:** Medium
**Components:** API
**Labels:** registration, account, public

## Prerequisites

- Given no account exists for the login and email used in this request
- And a test mailbox is capturing outbound mail

## Steps

1. When a client posts to `/api/register` with a new login, a new email, langKey "en", and a password of 51 characters
2. And a second new login is registered with a password of 100 characters

## Expected result

- Then each response is 201 Created with an empty body
- And each user is stored inactive
- And each stored password is a hash, not the submitted password
- And an activation email is sent for each account

## Notes

The registration form blocks a password longer than 50 characters. This case covers the API limit of 100 characters. Remove both users after the assertions.
