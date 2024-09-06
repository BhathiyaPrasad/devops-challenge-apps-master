const { Pool } = require('pg')
const pool = new Pool({
    host: '192.168.1.102',
    port: 5432,
    user: 'postgres',
    password: 'MasterPos1212',
    database: 'data'
})

module.exports = pool