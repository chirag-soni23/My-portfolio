const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())

// Mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/my-portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create mongoose model
const Contact = mongoose.model('Contact', contactSchema);


app.use(bodyParser.json());


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });

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
