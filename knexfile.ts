import path from 'path';

module.exports = {
    pool: {
        afterCreate: (conn: any, cb: any) => {
          conn.run('PRAGMA foreign_keys = ON', cb);
        }
      },
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds:{
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};