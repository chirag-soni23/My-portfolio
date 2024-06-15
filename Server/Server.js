const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin:["https://my-portfolio-frontend-three.vercel.app"],
  methods:["POST","GET"],
}));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error", err);
});

// Define schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Define model
const Contact = mongoose.model('Contact', contactSchema);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// GET Method
app.get("/",(req,res)=>{
  res.json("Hello");
})

// POST endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact form data to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'New Contact Form Submission',
      text: `
        You have received a new contact form submission:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: 'Failed to send message and email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(201).json({ message: 'Message sent successfully' });
      }
    });

  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: 'Failed to save contact' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
