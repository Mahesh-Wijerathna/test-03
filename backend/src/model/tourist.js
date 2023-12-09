const mongoose = require('mongoose');

// Define the user schema
const touristSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telephone: {
    type: String,
    required: true
  },
  isRegisterd: {
    type: Boolean,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: true
  }
});

// Create a User model from the schema
const Tourist = mongoose.model('Tourist', touristSchema);

module.exports = Tourist;
