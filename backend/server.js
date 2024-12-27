// const express = require('express');
// const { exec } = require('child_process');
// const cors = require('cors');
// const app = express();
// const port = 3001;

// // Enable CORS
// app.use(cors());
// app.use(express.json());

// app.post('/run-go', (req, res) => {
//   const goCode = req.body.code;

//   const fs = require('fs');
//   fs.writeFileSync('temp.go', goCode);

//   exec('go run temp.go', (error, stdout, stderr) => {
//     if (error) {
//       return res.status(500).json({ error: stderr });
//     }
//     res.json({ output: stdout });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
