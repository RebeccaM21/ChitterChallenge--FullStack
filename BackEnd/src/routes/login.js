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
        const { email, password } = req.body; 

        User.findOne({ email}, (err, user) => { 
            if (user && password === user.password) {
                res.send({ message: `Login success`, user });
            } 
            else { 
                res.send({ message: `Details not found` }); 
            }
        })


})

export { router as login };  