const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());


// Mongodb connection
mongoose.connect(process.env.MONGO_URL);

// Create schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create mongoose model
const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
