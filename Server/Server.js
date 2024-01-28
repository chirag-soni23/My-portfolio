// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Mongoose model
const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact instance
    const newContact = new Contact({ name, email, message });

    // Save the contact to the database
    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
