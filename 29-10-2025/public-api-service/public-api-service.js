const express = require('express');
const axios = require('axios');
const app = express();

// This should point to the private service (inside VPC or cluster)
const PRIVATE_SERVICE_URL = 'http://private-api.private-namespace.svc.cluster.local';

// Public endpoint to get account details
app.get('/getaccount', async (req, res) => {
  try {
    // Fetch from the private service's shared data or API
    const response = await axios.get(`${PRIVATE_SERVICE_URL}/internal/accounts`);
    res.json({ accounts: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch account details' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Public service running on port ${PORT}`));
