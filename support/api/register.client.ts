import type { APIRequestContext } from '@playwright/test';

export type RegisterBody = {
  login: string;
  email: string;
  password: string;
  langKey?: string;
};

export type FieldError = {
  field: string;
  message: string;
};

export type ProblemBody = {
  message?: string;
  fieldErrors?: FieldError[];
};

export class RegisterClient {
  constructor(private request: APIRequestContext) {}

  async register(body: RegisterBody) {
    const response = await this.request.post('/api/register', {
      data: { langKey: 'en', ...body },
    });
    const text = await response.text();
    const json = text ? (JSON.parse(text) as ProblemBody) : null;
    return { status: response.status(), text, json };
  }
}
