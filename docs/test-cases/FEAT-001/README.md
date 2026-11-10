# FEAT-001 — User registration test cases

**Jira:** [FEAT-001](../../feature-tickets/FEAT-001-user-registration.md) — User registration

Each case is standalone. Steps use Given / When / Then. Activation is [FEAT-002](../../feature-tickets/FEAT-002-account-activation.md) and is not exercised here.

The seeded activated account used as the duplicate fixture has login `admin` and email `admin@localhost`.

| ID | Title | Priority | Components |
| --- | --- | --- | --- |
| [REG-001](REG-001-open-registration-from-the-home-page.md) | Open registration from the home page | High | UI |
| [REG-002](REG-002-open-registration-from-the-account-menu.md) | Open registration from the account menu | High | UI |
| [REG-003](REG-003-open-registration-by-direct-address.md) | Open registration by direct address | High | UI |
| [REG-004](REG-004-create-an-inactive-account.md) | Create an inactive account | High | UI, API, Database |
| [REG-005](REG-005-store-login-and-email-in-lowercase.md) | Store login and email in lowercase | High | Database |
| [REG-006](REG-006-block-sign-in-before-activation.md) | Block sign-in before activation | Medium | API |
| [REG-007](REG-007-reject-a-duplicate-activated-login.md) | Reject a duplicate activated login | High | UI, API, Database |
| [REG-008](REG-008-treat-login-case-as-the-same-account.md) | Treat login case as the same account | High | API |
| [REG-009](REG-009-reject-a-duplicate-activated-email.md) | Reject a duplicate activated email | High | UI, API, Database |
| [REG-010](REG-010-treat-email-case-as-the-same-account.md) | Treat email case as the same account | High | API |
| [REG-011](REG-011-replace-an-inactive-account-with-the-same-login.md) | Replace an inactive account with the same login | High | Database |
| [REG-012](REG-012-replace-an-inactive-account-with-the-same-email.md) | Replace an inactive account with the same email | High | Database |
| [REG-013](REG-013-block-submit-when-a-required-field-is-empty.md) | Block submit when a required field is empty | High | UI |
| [REG-014](REG-014-block-submit-when-the-username-pattern-is-invalid.md) | Block submit when the username pattern is invalid | High | UI |
| [REG-015](REG-015-block-submit-when-the-username-is-too-long.md) | Block submit when the username is too long | High | UI |
| [REG-016](REG-016-accept-a-one-character-username.md) | Accept a one-character username | Medium | UI |
| [REG-017](REG-017-block-submit-when-the-email-is-too-short.md) | Block submit when the email is too short | High | UI |
| [REG-018](REG-018-block-submit-when-the-email-format-is-invalid.md) | Block submit when the email format is invalid | High | UI |
| [REG-019](REG-019-email-length-and-the-too-long-message.md) | Email length and the too-long message | Medium | UI |
| [REG-020](REG-020-block-submit-when-the-password-is-too-short.md) | Block submit when the password is too short | High | UI |
| [REG-021](REG-021-block-submit-when-the-confirmation-does-not-match.md) | Block submit when the confirmation does not match | High | UI |
| [REG-022](REG-022-password-length-on-the-form.md) | Password length on the form | Medium | UI |
| [REG-023](REG-023-show-a-password-strength-bar.md) | Show a password strength bar | Medium | UI |
| [REG-024](REG-024-do-not-call-the-api-until-the-form-is-valid.md) | Do not call the API until the form is valid | High | UI |
| [REG-025](REG-025-reject-a-password-the-api-considers-invalid.md) | Reject a password the API considers invalid | High | API |
| [REG-026](REG-026-accept-a-password-only-the-api-allows.md) | Accept a password only the API allows | Medium | API |
| [REG-027](REG-027-keep-the-password-and-activation-key-out-of-the-response.md) | Keep the password and activation key out of the response | High | API |
| [REG-028](REG-028-reject-a-request-with-no-login.md) | Reject a request with no login | Medium | API |
| [REG-029](REG-029-send-the-activation-email-only-after-a-successful-save.md) | Send the activation email only after a successful save | High | API, Database |
