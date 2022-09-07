import express from 'express'; 
import Entry from '../models/entry.model.js';  

 const router = express.Router(); 


router.route(`/`)
    .post((req, res) => {

        const newEntry = new Entry(req.body);
        newEntry.save(err => {
            if (err) {
                res.send(err);
            }
            else {
                res.send({ message: `Message Uploaded` });
            }
        });
    })

    .get((req, res) => {
        Entry.find({}, (error, entries) => {
            console.log(entries);
            error ? res.status(404).json({ error: 'Messages not found' }) : res.json(entries);
        })
    })
      

export { router as addEntry };  