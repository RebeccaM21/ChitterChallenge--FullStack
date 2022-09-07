import express from 'express'; 
import User from '../models/user.model.js'; 

 const router = express.Router(); 


router.route(`/`)
    
    .get((req, res) => { 
        User.find({}, (error, users) => {
            console.log(users);
        error ? res.status(404).json({ error: 'User not found' }) : res.json(users);
    })
 
    })
    
    .post((req, res) => { 
        const { email } = req.body; 

        User.findOne({ email }, (err, user) => { 
            if (email) {
                res.send({ message: `Login success`, user });
            }
            else { 
                res.send({ message: `Details not found` }); 
            }
        })

        // res.render('index'); 

})

// check if the details are in the database and that they match up 
// If in the database navigate to the specific page with the posts 
// Make a view so that it navigates to that specific route 

      

export { router as login };  