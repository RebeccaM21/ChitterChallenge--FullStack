import express from 'express'; 
import Entry from '../entry.model.js'; 

 const router = express.Router(); 


router.route("/").get( (req, res) => { 
    Entry.find((error, entries) => { 
        if (error) { 
            console.log(error);
        }
        entries ? res.json(entries) : res.status(404).send('not found')
    })
 
})

// router.route("/").get( (req, res) => { 
//     Entry.find((error, entries) => { 
//         if (error) { 
//             console.log(error);
//         }
//         entries ? res.json(entries) : res.status(404).send('not found')
//     })
 
// })

export { router as entries };  


// router.post((req, res) => {
//     const newChitter = new newChitterSchema(req.body); 
//     newChitter.save(); 

//     .then(newChitter => res.status(201).json({ "newChitter": "Message Added Successfully" }))
//     .catch(err => res.status(422).json({ "error": "Adding new message failed" }));
// })