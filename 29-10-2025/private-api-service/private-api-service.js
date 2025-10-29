const express = require('express');
const app = express();
app.use(express.json());

// Temporary in-memory store (simulating shared DB)
const accounts = [];

// Add bank account (private endpoint)
app.post('/addbankaccount', (req, res) => {
  const { accountNumber, name } = req.body;
  if (!accountNumber || !name) {
    return res.status(400).json({ error: 'accountNumber and name are required' });
  }
  accounts.push({ accountNumber, name });
  res.json({ message: `Bank account ${accountNumber} added successfully` });
});

// Expose accounts data (for demonstration only)
// In real scenario, this would be an internal/shared database
app.get('/internal/accounts', (req, res) => res.json(accounts));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Private service running on port ${PORT}`));
