// index.js

const express = require('express');
const mysql = require('mysql2/promise'); // Use the promise-based version
const app = express();
const port = 8080;

// Create a connection to the local MySQL database
const db = mysql.createPool({
  host: 'database-1.ctmsmymag53r.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Welcome123',
  database: 'sampledatabase',
  port:3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Sample route that interacts with the database using async/await
app.get('/getdbdata', async (req, res) => {
  try {
    // Execute a sample query using await
    const [rows, fields] = await db.execute('SELECT * FROM sampletable');
    res.json({ message: 'Hello, welcome to your Express API!', data: rows });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Sample route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, welcome to your Express API!' });
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
