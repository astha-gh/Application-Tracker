require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7778;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connnected"))
    .catch(err => console.log(err));

app.use('/api/applicants' , require('./routes/applicants'));

app.get('/', (req, res) => {
    res.send('App Loaded');
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})