const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello from Node.js app running in AKS 🚀');
});

// Health check (IMPORTANT for Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Read secret (injected via Helm / Key Vault)
app.get('/secret', (req, res) => {
  const secret = process.env.APP_SECRET || 'not-set';
  res.status(200).json({ secret });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
