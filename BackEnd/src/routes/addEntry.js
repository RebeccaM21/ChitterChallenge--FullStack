import express from 'express'; 
import newChitterSchema from '../newChitterSchema'; 

export const router = express.Router(); 


router.get("/", (req, res) => { 
    res.send("API is working correctly"); 
})

// router.post((req, res) => {
//     const newChitter = new newChitterSchema(req.body); 
//     newChitter.save(); 

//     .then(newChitter => res.status(201).json({ "newChitter": "Message Added Successfully" }))
//     .catch(err => res.status(422).json({ "error": "Adding new message failed" }));
// })