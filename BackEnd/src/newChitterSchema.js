import mongoose from "mongoose";    

const newChitterSchema = new mongoose.Schema(
    {
        name: {
            first: { type: String, required: true },
            last: { type: String, required: true },
        },

        message: { type: String, required: true }, 
    }
); 

const NewChitter = mongoose.model('NewChitter', newChitterSchema); 

export default NewChitter; 