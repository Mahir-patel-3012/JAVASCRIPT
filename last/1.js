const express = require('express');
const app = express();
const PORT = 3000;

// Define different API routes
app.get('/api/data1', (req, res) => {
    res.json({ data: 'Response from API 1' });
});

app.get('/api/data2', (req, res) => {
    res.json({ data: 'Response from API 2' });
});

app.get('/api/data3', (req, res) => {
    res.json({ data: 'Response from API 3' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
