import { DB, QueryConfig, APIResponse } from '../../types';
import { User } from '../../models';

export async function updateUserName(db: DB, args: any) {
  const {
    id,
    user: { name },
  } = args;

  const query: QueryConfig = {
    text: `UPDATE master_companion SET name = $2 WHERE id = $1 RETURNING *`,
    values: [id, name],
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
