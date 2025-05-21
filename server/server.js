console.log('Starting server.js...');

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route for testing
app.get('/', (req, res) => {
  console.log('Root route accessed');
  res.send('✅ Contact form backend is running');
});


// Contact API route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // Simple email validation regex
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  // Log received contact form data
  console.log('📬 Contact Form Received');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Send success response
  res.status(200).json({
    success: true,
    message: 'Message received!'
  });
});

// Generic error handler (for unexpected errors)
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err);
  res.status(500).json({ success: false, error: 'Internal server error.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
