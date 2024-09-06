const { Pool } = require('pg')
const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: 'MasterPos1212',
    database: 'data'
})

module.exports = pool