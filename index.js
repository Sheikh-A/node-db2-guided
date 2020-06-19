const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));


//npx  i knex
//npx knex init
//add migration to knexfile.js
//npx knex migrate:make fruits-schema 
//create schema in migrations > TIMESTAMP_schema.js
//npx knex migrate:latest
//in order to make change to schema: npx knex migrate:rollback, npm knex migrate:latest
//create seeds in knexfile.js -- npm knex seed:make 01-fruits
//npx knex seed: run