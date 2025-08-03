const express = require('express');
const router = express.Router();
const Applicant = require('../models/applicants')

router.post('/' , async(req , res) => {
    try{
        const newApplicant = new Applicant(req.body);
        await newApplicant.save();
        res.status(201).json({message : 'Application submitted successfully!'});
    }
    catch(err){
        res.status(400).json({ message: 'Application submition failed' });
    }
})

router.get('/' , async(req , res) => {
    try{
        const applicants = await Applicant.find().sort({date: -1})
        res.json(applicants)
    }
    catch(err){
        res.status(500).json({ message: 'Could not fetch applicants' });
    }
})

module.exports = router;