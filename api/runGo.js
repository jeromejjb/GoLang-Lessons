const { exec } = require('child_process');
const cors = require('cors');
const fs = require('fs');

// Create an Express-like handler without using `app.listen` for Vercel serverless
module.exports = async (req, res) => {
  // Enable CORS
  cors()(req, res, () => {});

  // Handle POST requests to /run-go
  if (req.method === 'POST') {
    const goCode = req.body.code;

    // Write the Go code to a temporary file in Vercel's /tmp directory
    try {
      const filePath = '/tmp/temp.go';
      fs.writeFileSync(filePath, goCode);

      // Execute the Go code
      exec(`go run ${filePath}`, (error, stdout, stderr) => {
        if (error) {
          return res.status(500).json({ error: stderr });
        }
        res.json({ output: stdout });
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to write Go code to file' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
