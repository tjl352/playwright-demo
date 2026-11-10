import { Pool } from 'pg';

export type StoredUser = {
  id: number | string;
  login: string;
  email: string;
  password_hash: string;
  activated: boolean;
  lang_key: string;
  activation_key: string | null;
};

export class UsersDb {
  private pool: Pool;

  constructor(connectionString: string) {
    this.pool = new Pool({ connectionString });
  }

  async findByLogin(login: string): Promise<StoredUser | null> {
    const result = await this.pool.query<StoredUser>(
      `SELECT id, login, email, password_hash, activated, lang_key, activation_key
       FROM jhi_user
       WHERE login = $1`,
      [login],
    );
    return result.rows[0] ?? null;
  }

  async authorities(userId: number | string): Promise<string[]> {
    const result = await this.pool.query<{ authority_name: string }>(
      `SELECT authority_name
       FROM jhi_user_authority
       WHERE user_id = $1
       ORDER BY authority_name`,
      [userId],
    );
    return result.rows.map(row => row.authority_name);
  }

  async deleteByLogin(login: string): Promise<void> {
    await this.pool.query(
      `DELETE FROM jhi_user_authority
       WHERE user_id IN (SELECT id FROM jhi_user WHERE login = $1)`,
      [login],
    );
    await this.pool.query(`DELETE FROM jhi_user WHERE login = $1`, [login]);
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}
