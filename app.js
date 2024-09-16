const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// Database connection using environment variables
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',       // Default to 'db' service name
  user: process.env.DB_USER || 'root',     // Default user 'root'
  password: process.env.DB_PASS || 'password', // Default password
  database: process.env.DB_NAME || 'mydb'  // Default database 'mydb'
});

app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS currentTime');
    res.send(`Hello from Node.js and MySQL! The current time is: ${rows[0].currentTime}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
