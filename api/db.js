const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'MasterPos1212',
    database: 'postgres'
})

module.exports = pool