const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    skills: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Applicant' , applicantSchema);