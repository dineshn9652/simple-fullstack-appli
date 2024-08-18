const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle messages
app.post('/api/message', (req, res) => {
    const message = req.body.message;
    if (message) {
        res.status(200).json({ success: true, response: `Message received: ${message}` });
    } else {
        res.status(400).json({ success: false, error: 'No message provided' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
