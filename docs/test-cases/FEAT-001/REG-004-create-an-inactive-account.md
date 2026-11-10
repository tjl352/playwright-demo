# [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) REG-004 — Create an inactive account

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md)
**Test case ID:** REG-004
**Priority:** High
**Components:** UI, API, Database
**Labels:** registration, account, public

## Prerequisites

- Given the visitor is not signed in
- And the visitor is on the registration page
- And no account exists for login "jane.doe" or email "jane.doe@example.com"
- And a test mailbox is capturing outbound mail

## Steps

1. When the visitor enters username "jane.doe"
2. And the visitor enters email "jane.doe@example.com"
3. And the visitor enters password "secret1"
4. And the visitor enters the same password as confirmation
5. And the visitor submits the registration form

## Expected result

- Then the registration succeeds
- And `POST /api/register` is sent with login "jane.doe", email "jane.doe@example.com", password "secret1", and langKey "en"
- And the API responds 201 Created with an empty body
- And a success message is shown
- And the visitor is not signed in
- And an inactive user is stored with login "jane.doe"
- And the stored email is "jane.doe@example.com"
- And the stored password is a 60-character hash, not "secret1"
- And `activated` is false
- And an activation key is stored
- And the activation key is not returned to the client
- And `lang_key` is "en"
- And `first_name`, `last_name`, and `image_url` are empty
- And the user has authority "ROLE_USER" only
- And an activation email is sent to "jane.doe@example.com"
- And the activation link is not opened
