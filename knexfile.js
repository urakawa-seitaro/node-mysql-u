// Update with your config settings.

module.exports = {
// development = 開発環境
  development: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10
    },
  },
// staging = ステージング環境
  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10
    },
  },
// production = 本番環境
  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};