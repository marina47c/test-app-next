// db.js
import sql from 'mssql'

// connection configs
const config = {
  server: 'localhost',
  database: 'posts.db',
  options: {
    instancename: 'MarinaPC\\SQLEXPRESS',
    trustedconnection: true,
    trustServerCertificate: true,
  },
}

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to SQL Server Express');
  } catch (error) {
    console.error('Error connecting to SQL Server Express:', error.message);
  }
}

connectToDatabase();
