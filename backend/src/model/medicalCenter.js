const mongoose = require('mongoose');

// Define the user schema
const medicalCenterSchema = new mongoose.Schema({
  medicalCenterRegistrationId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true,
    
  },
  telephone: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    default: false
  },
  password: {
    type: String,
    required: true
  },
  nearestDestination: {
    type: String,
    required: true
  },
  medicalCenterMedia: {
    type: String,
    required: true
  }
});

// Create a User model from the schema
const MedicalCenter = mongoose.model('medicalCenter', medicalCenterSchema);

module.exports = MedicalCenter;
