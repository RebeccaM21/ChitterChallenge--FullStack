import express from 'express'; 
import User from '../models/user.model.js'; 

 const router = express.Router(); 


router.route(`/`)

    // Take the details and add it to the database 
// Need to do a get request before doing post request. Need to input fake data into the database 

    .post((req, res) => {
        const { email } = req.body; 
        const { username } = req.body; 

        // Stop the user registering if their email or username is already in the database 

        User.find({email, username}, (err, user) => { 
            if (user) { 
            res.send({message: `User already exists.`})
            } else { 
            
        const registration = new User(req.body);
                registration.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `Registration successful` });
                    }
                }); 
                



            // .then((registration) => {
            //     res.status(200).json({ "user": "Registration Successful" })
            // })
            // .catch((error) => {
            //     res.status(400).send("Registration failed, please try again");
            // })
                
                }
        })
 
    });
      

export { router as signup };  