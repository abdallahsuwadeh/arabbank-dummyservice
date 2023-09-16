const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Dummy function to generate fake traffic metrics
const generateFakeMetrics = () => {
    return {
        pageViews: Math.floor(Math.random() * 100),
        activeUsers: Math.floor(Math.random() * 50),
        bounceRate: Math.random().toFixed(2)
    };
};

// Endpoint to serve HTML page
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <title>Dummy Metrics Generator</title>
      </head>
      <body>
        <h1>Welcome to the Dummy Metrics Generator</h1>
        <button onclick="generateAndSendMetrics()">Generate and Send Metrics</button>
        <br/>
        <label id="msg_lbl"></label>
        <script>
          async function generateAndSendMetrics() {
            const response = await fetch('/generate-metrics', {
              method: 'POST'
            });
            const data = await response.json();
            document.getElementById('msg_lbl').innerHTML = 'Metrics sent:' + JSON.stringify(data)
          }
        </script>
      </body>
    </html>
  `);
});

// Endpoint to generate and send metrics
app.post('/generate-metrics', async (req, res) => {
    const metrics = generateFakeMetrics();
    try {
        // Replace with your actual ingest service URL
        await axios.post('http://your-ingest-service.com/metrics', metrics);
        res.json({ success: true, metrics });
    } catch (error) {
        res.json({ success: false, error: error.message, metrics });
    }
});

app.listen(port, () => {
    console.log(`Dummy metrics generator app listening at http://localhost:${port}`);
});
