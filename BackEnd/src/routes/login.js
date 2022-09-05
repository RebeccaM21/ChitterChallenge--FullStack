import express from 'express'; 
import User from '../models/user.model.js'; 

 const router = express.Router(); 


router.route(`/`)
    .get((req, res) => { 
        
        
        // res.render('index'); 

})

// check if the details are in the database and that they match up 
// If in the database navigate to the specific page with the posts 
// Make a view so that it navigates to that specific route 

      

export { router as signup };  