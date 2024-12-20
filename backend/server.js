// backend/server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'postgres', // The service name defined in docker-compose.yml
  database: 'madness_data',
  password: '123',
  port: 5432,
});

// Define an API endpoint to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});