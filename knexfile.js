// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },

    useNullAsDefault: true, //needed for knex

    migrations: {
      directory: "./data/migrations"
    }
  }

};
