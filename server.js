const express = require('express');
const cors = require('cors');
const path = require('path');
const formSubmitRoute = require('./routes/formSubmit');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', formSubmitRoute); // POST to /api/submit-form

// Serve .well-known for Android App Links
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/{*all}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
