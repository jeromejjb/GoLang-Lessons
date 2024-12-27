// api/runGo.js
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');
const fs = require('fs');

// Create Express app
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON body parsing

// Route to run Go code
app.post('/run-go', (req, res) => {
  const goCode = req.body.code;

  // Write the Go code to a temporary file
  fs.writeFileSync('/tmp/temp.go', goCode);

  // Execute the Go code
  exec('go run /tmp/temp.go', (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: stderr });
    }
    res.json({ output: stdout });
  });
});

// Vercel serverless function handler
module.exports = (req, res) => {
  app(req, res); // Pass the request and response to the Express app
};
