// db.js
import sql from 'mssql'

// connection configs
const config = {
  user: 'username',
  password: 'password',
  server: 'localhost',
  database: 'DATABASE_NAME',
  port: 1433,
  options: {
    instancename: 'SQLEXPRESS',
    trustedconnection: true,
    trustServerCertificate: true,
  },
}

export default async function executeQuery(query, options) {
  try {
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);
    return result.recordsets;
  } catch (error) {
    console.log(error);
  }
}
