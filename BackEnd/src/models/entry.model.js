import mongoose from "mongoose";    

const entrySchema = new mongoose.Schema(
    {
        name: {
            first: { type: String, required: true },
            last: { type: String, required: true },
        },

        message: { type: String, required: true }, 
    }, 
    { collection: "Chitters"}
); 

const Entry = mongoose.model('Entry', entrySchema); 

export default Entry; 