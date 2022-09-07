import mongoose from "mongoose";    

const entrySchema = new mongoose.Schema(
    {
        username: { type: String },
        message: { type: String }, 
        time: { type: String},
    }, 
    { collection: "Chitters"}
); 

const Entry = mongoose.model('Entry', entrySchema); 

export default Entry; 