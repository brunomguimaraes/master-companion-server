import { DB, QueryConfig, APIResponse } from '../../types';
import { User } from '../../models';

export async function users(db: DB, args: any) {
  let query: QueryConfig = { text: 'SELECT * FROM master_companion' };

  if (args && args.keyword) {
    query = {
      text: `SELECT * FROM master_companion WHERE name LIKE '%' || $1 || '%' OR nickname LIKE '%' || $1 || '%'`,
      values: [args.keyword],
    };
  }

  const result = await db.query(query);

  const response: APIResponse<User[]> = {
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
