import { DB, QueryConfig, APIResponse } from '../../types';
import { User } from '../../models';

export async function createUser(db: DB, args: any) {
  const {
    user: { name, nickname, role },
  } = args;

  const query: QueryConfig = {
    text: `INSERT INTO master_companion(name, nickname, role) VALUES($1, $2, $3) RETURNING *`,
    values: [name, nickname, role],
  };

  const result = await db.query(query);
  const response: APIResponse<User> = {
    status: 'fetching',
  };

  try {
    if (result.rowCount > 0) {
      const data = result.rows.map((user: User) => {
        return {
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          role: user.role,
          createdAt: user.created_at,
          updatedAt: user.updated_at,
        };
      });
      response.status = 'success';
      response.data = data;
    }
  } catch (e) {
    response.status = 'error';
  }

  return response;
}
